package main

import (
	"encoding/json"
	"syscall/js"

	goapi "github.com/fred29910/goapi" // 使用 go.mod 中的模块路径
)

var apiClient *goapi.Client

// initAPI 用于初始化 API 客户端，它会被暴露给 JavaScript。
func initAPI(this js.Value, args []js.Value) any {
	// 从 JavaScript 接收后端服务的 baseURL
	if len(args) == 0 || args[0].String() == "" {
		// 可以在这里返回一个错误或使用默认值
		return js.Global().Get("Promise").New(js.FuncOf(func(this js.Value, pArgs []js.Value) any {
			reject := pArgs[1]
			reject.Invoke(js.Global().Get("Error").New("initAPI requires a non-empty baseURL"))
			return nil
		}))
	}
	baseURL := args[0].String()
	// 配置并创建 API 客户端实例
	var err error
	apiClient, err = goapi.NewClient(baseURL)

	if err != nil {
		return err
	}
	return nil
}

// getUser 是一个调用后端 /users/{id} 接口的示例函数。
// 它返回一个 Promise，以便在前端进行异步处理。
func getUser(this js.Value, args []js.Value) any {
	// 返回一个 JavaScript Promise
	return js.Global().Get("Promise").New(js.FuncOf(func(this js.Value, pArgs []js.Value) any {
		resolve := pArgs[0]
		reject := pArgs[1]

		if apiClient == nil {
			reject.Invoke(js.Global().Get("Error").New("API client is not initialized. Call initAPI first."))
			return nil
		}

		if len(args) == 0 || args[0].String() == "" {
			reject.Invoke(js.Global().Get("Error").New("getUser requires a user ID"))
			return nil
		}
		id := args[0].String()

		// 使用 goroutine 在后台执行网络请求，避免阻塞
		go func() {
			// 假设存在一个名为 UserApi 的 API (请根据您的 openapi.yaml 修改)
			// 并且它有一个 GetUserById 方法
			// user, _, err := apiClient.UserApi.GetUserById(context.Background(), id).Execute()

			// 由于我们不确定实际的 API 结构，这里我们使用一个模拟的成功响应
			// 请根据您 goapi 中的实际情况替换下面的代码
			mockUser := map[string]string{"id": id, "name": "Mock User"}
			b, err := json.Marshal(mockUser)

			if err != nil {
				// 如果发生错误，将错误信息序列化为 JSON 字符串
				reject.Invoke(js.Global().Get("Error").New("Failed to marshal mock user: " + err.Error()))
				return
			}

			// 成功后，将返回的用户数据序列化为 JSON 字符串
			resolve.Invoke(string(b))
		}()
		return nil
	}))
}

func main() {
	// 将 Go 函数注册到全局作用域 (window)，以便 JavaScript 调用
	js.Global().Set("initAPI", js.FuncOf(initAPI))
	js.Global().Set("getUser", js.FuncOf(getUser))

	// 保持 Go 程序运行，等待 JavaScript 的调用
	c := make(chan struct{}, 0)
	<-c
}
