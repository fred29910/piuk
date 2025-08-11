# 从 OpenAPI 生成 Go Wasm SDK

本文档描述了如何从一个 OpenAPI 规范生成一个 Go WebAssembly (Wasm) API SDK，该 SDK 可以被任何前端项目（如 React, Vue, 或纯 HTML）直接使用。

## 🎯 目标

*   从 **OpenAPI** 规范生成一个 **Go wasm API SDK**。
*   将 SDK 编译成一个**可复用的、独立的 `lib.wasm`** 文件。
*   确保前端项目可以直接加载和使用此 Wasm模块，而无需依赖 Go 源码。
*   提供配套的 `.d.ts` 类型声明文件，以便在前端开发中获得类型提示和自动补全。

---

## 1️⃣ 构建流程

### ① 用 OpenAPI 生成 Go Client

使用 `openapi-generator-cli` 工具，根据您的 `openapi.yaml` 文件生成 Go 语言的 API 客户端。

```bash
openapi-generator-cli generate \
  -i ./openapi.yaml \
  -g go \
  -o ./goapi
```

### ② 新建 Wasm 封装层

在 `goapi_wasm/main.go` 文件中，我们引用上一步生成的客户端，并将其 API 封装成可供 JavaScript 调用的函数。

```go
package main

import (
	"context"
	"encoding/json"
	"syscall/js"

	"your/module/goapi" // 请替换为您的 Go 模块路径
)

var apiClient *goapi.APIClient

// initAPI 用于初始化 API 客户端，它会被暴露给 JavaScript。
func initAPI(this js.Value, args []js.Value) any {
	// 从 JavaScript 接收后端服务的 baseURL
	baseURL := args[0].String()
	
	// 配置并创建 API 客户端实例
	cfg := goapi.NewConfiguration()
	cfg.Servers = goapi.ServerConfigurations{{URL: baseURL}}
	apiClient = goapi.NewAPIClient(cfg)
	
	return nil
}

// getUser 是一个调用后端 /users/{id} 接口的示例函数。
// 它返回一个 Promise，以便在前端进行异步处理。
func getUser(this js.Value, args []js.Value) any {
	id := args[0].String()
	ch := make(chan string)

	// 使用 goroutine 在后台执行网络请求，避免阻塞
	go func() {
		user, _, err := apiClient.UsersApi.GetUser(context.Background(), id).Execute()
		if err != nil {
			// 如果发生错误，将错误信息序列化为 JSON 字符串
			ch <- `{"error":"` + err.Error() + `"}`
			return
		}
		// 成功后，将返回的用户数据序列化为 JSON 字符串
		b, _ := json.Marshal(user)
		ch <- string(b)
	}()

	// 返回一个 JavaScript Promise
	return js.Global().Get("Promise").New(js.FuncOf(func(this js.Value, pArgs []js.Value) any {
		resolve := pArgs[0]
		go func() {
			// 等待 goroutine 的结果，并通过 resolve 返回给 JavaScript
			result := <-ch
			resolve.Invoke(result)
		}()
		return nil
	}))
}

func main() {
	// 将 Go 函数注册到全局作用域 (window)，以便 JavaScript 调用
	js.Global().Set("initAPI", js.FuncOf(initAPI))
	js.Global().Set("getUser", js.FuncOf(getUser))
	
	// 保持 Go 程序运行，等待 JavaScript 的调用
	select {}
}
```

### ③ 编译成单独的 `lib.wasm`

您可以选择使用标准的 Go 编译器或 TinyGo。**推荐使用 TinyGo**，因为它生成的 Wasm 文件体积要小得多。

**使用标准 Go 编译器:**
```bash
# 设置目标平台为 js/wasm
GOOS=js GOARCH=wasm go build -o dist/lib.wasm ./goapi_wasm

# 复制 Go 官方提供的 JS 胶水代码，用于加载和运行 Wasm
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" dist/
```

**使用 TinyGo (推荐):**
```bash
# TinyGo 的编译命令更简单，且通常不需要 wasm_exec.js
tinygo build -o dist/lib.wasm -target wasm ./goapi_wasm
```

---

## 2️⃣ 前端调用（任意框架）

编译产物 `dist/lib.wasm` 和 `dist/wasm_exec.js` (如果使用标准 Go 编译器) 就是您的 SDK。前端可以按以下方式加载和使用它。

```html
<!-- 如果使用标准 Go 编译器，需要引入此文件 -->
<script src="/wasm_exec.js"></script>
<script>
  // 仅当使用 wasm_exec.js 时需要实例化 Go
  const go = new Go();
  
  // 通过 fetch 加载 Wasm 文件并实例化
  WebAssembly.instantiateStreaming(fetch("/lib.wasm"), go.importObject).then(result => {
    // 运行 Wasm 实例，这会使 Go 的 main 函数开始执行
    go.run(result.instance);

    // 1. 初始化 API，传入后端服务的地址
    initAPI("https://api.example.com");

    // 2. 调用导出的 API 函数
    getUser("123").then(res => {
      // Wasm 返回的是 JSON 字符串，需要手动解析
      const data = JSON.parse(res);
      console.log("User data:", data);
    });
  });
</script>
```

---

## 3️⃣ 自动生成 `.d.ts` 声明文件

为了提供良好的开发体验，您应该为 SDK 创建一个 `.d.ts` 类型声明文件。

#### 方案 A: 用 OpenAPI 生成 TypeScript 声明

这是最理想的方式，因为类型定义将与您的 API 规范保持完全同步。

```bash
openapi-generator-cli generate \
  -i ./openapi.yaml \
  -g typescript-fetch \
  -o ./tsapi
```

然后，从生成的 `./tsapi/index.d.ts` 文件中提取出您需要的接口模型（如 `User`, `Product` 等），并将它们与您手写的 Wasm 函数声明合并到一个 `lib.d.ts` 文件中。

#### 方案 B: 手写简化版声明

如果 API 比较简单，或者您想快速开始，也可以手写一个声明文件。

**`lib.d.ts`**
```ts
declare global {
  /**
   * 初始化 API 客户端。
   * @param baseUrl 后端服务的根地址。
   */
  function initAPI(baseUrl: string): void;

  /**
   * 根据用户 ID 获取用户信息。
   * @param id 用户 ID。
   * @returns 一个 Promise，其解析值为包含用户信息的 JSON 字符串。
   */
  function getUser(id: string): Promise<string>; // 您也可以定义 User 类型，并使函数返回 Promise<User>
}

// 添加一个空的 export 语句，以确保此文件被 TypeScript 视为一个模块。
export {};
```

---

## 4️⃣ 目录结构（可打包成 npm 包）

一个结构良好的 SDK 项目可以按以下方式组织，这也有利于后续发布到 npm。

```
my-wasm-sdk/
├── goapi/             # openapi-generator 生成的 Go 客户端
├── goapi_wasm/        # Wasm 封装层
│   └── main.go
├── dist/              # 编译产物
│   ├── lib.wasm
│   ├── wasm_exec.js   # (可选, 如果使用标准 Go 编译器)
│   └── lib.d.ts       # 类型声明文件
└── package.json       # npm 包定义文件
```

若要发布到 npm，只需在 `package.json` 中配置好 `files` 字段指向 `dist` 目录，然后执行：

```bash
npm publish --access public
```

发布后，前端项目就可以通过 npm 安装和使用您的 SDK：

```ts
import { initAPI, getUser } from "my-wasm-sdk";
```

---

## 5️⃣ 优化建议

1.  **减少 Go 代码依赖** → 在 `goapi_wasm` 中只 `import` 实际用到的 API 文件，而不是整个 `goapi` 包，以减小最终 Wasm 文件的体积。
2.  **用 TinyGo + wasm-opt** → TinyGo 编译出的 Wasm 体积远小于标准 Go 编译器。再结合 `wasm-opt` 工具进行优化，可以将一个 2-3MB 的 Wasm 文件压缩到 300-500KB。
3.  **返回 JSON 字符串** → 在 Go 与 JavaScript 之间传递复杂对象（如 struct/map）会有性能开销。直接传递序列化后的 JSON 字符串是最简单高效的方式。
4.  **发布产物时带 `.d.ts`** → 这是现代前端开发的标准配置，能极大提升开发体验和代码质量。

---

## 下一步

我可以帮你直接做一个 **“openapi → Go wasm lib + d.ts”** 的构建脚本，执行一条命令就生成 `.wasm + .js + .d.ts`，直接丢给前端用。

你是想要我帮你写这个构建脚本，还是先把 **单独的 lib.wasm SDK 模板** 完整代码给你？这样你就能自己替换 OpenAPI 文件直接生成。
