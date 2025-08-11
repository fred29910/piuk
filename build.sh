#!/bin/bash

# 脚本出错时立即退出
set -e

# 定义颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# --- 步骤 1: 环境检查 ---
echo -e "${GREEN}Step 1: Checking for required tools...${NC}"
command -v openapi-generator-cli >/dev/null 2>&1 || { echo -e >&2 "${RED}Error: openapi-generator-cli is not installed. Please install it first.${NC}"; exit 1; }
command -v tinygo >/dev/null 2>&1 || { echo -e >&2 "${RED}Error: tinygo is not installed. Please install it first (see https://tinygo.org).${NC}"; exit 1; }
echo "All tools found."

# --- 步骤 2: 清理和准备 ---
echo -e "\n${GREEN}Step 2: Cleaning up and preparing directories...${NC}"
rm -rf dist build
mkdir -p dist build
echo "Cleaned 'dist' and 'build' directories."

# --- 步骤 3: (可选) 重新生成 Go API 客户端 ---
# 取消下面的注释，以便在每次构建时都从 openapi.yaml 重新生成 goapi
# echo -e "\n${GREEN}Step 3: Regenerating Go API client...${NC}"
# openapi-generator-cli generate \
#   -i ./openapi.yaml \
#   -g go \
#   -o ./goapi
# echo "Go client regenerated in ./goapi."

# --- 步骤 4: 编译 Wasm ---
echo -e "\n${GREEN}Step 4: Compiling Go code to Wasm...${NC}"
# 注意：我们需要进入 goapi_wasm 目录来编译，因为它可能需要自己的 go.mod
# 为了简单起见，我们假设它能直接找到上级 goapi 模块
(cd goapi && go mod tidy)
tinygo build -o ../dist/lib.wasm -target wasm ./goapi_wasm/main.go
echo -e "Wasm binary saved to ${YELLOW}dist/lib.wasm${NC}"

# --- 步骤 5: 生成 TypeScript 声明 ---
echo -e "\n${GREEN}Step 5: Generating TypeScript types...${NC}"
openapi-generator-cli generate \
  -i ./openapi.yaml \
  -g typescript-fetch \
  --type-mappings=object=any \
  -o ./build/tsapi
echo "TypeScript types generated in ./build/tsapi."

# --- 步骤 6: 组装最终的 .d.ts ---
echo -e "\n${GREEN}Step 6: Assembling final .d.ts file...${NC}"
DTS_FILE="dist/lib.d.ts"
# 写入 Wasm 模块导出的函数声明
cat << EOF > "$DTS_FILE"
// --- Wasm Module Exports ---

/**
 * Initializes the API client.
 * @param baseUrl The base URL of your backend API.
 * @returns A promise that resolves when initialization is complete.
 */
export function initAPI(baseUrl: string): Promise<void>;

/**
 * Retrieves a user by their ID.
 * @param id The user's ID.
 * @returns A promise that resolves with a JSON string of the user data.
 */
export function getUser(id: string): Promise<string>;


// --- API Model Types from OpenAPI ---

EOF

# 从生成的 tsapi/models.ts 中提取所有类型定义并附加到我们的 .d.ts 文件中
# 我们使用 grep 来查找 'export interface' 和 'export type'
# 如果您的模型文件不同，可能需要调整此处的逻辑
MODEL_FILE="./build/tsapi/src/models.ts"
if [ -f "$MODEL_FILE" ]; then
    grep -E "^export (interface|type)" "$MODEL_FILE" >> "$DTS_FILE"
    echo "API model types appended to .d.ts."
else
    echo -e "${YELLOW}Warning: Model file not found at $MODEL_FILE. The .d.ts will not include API types.${NC}"
fi

echo -e "Final declaration file saved to ${YELLOW}${DTS_FILE}${NC}"

# --- 完成 ---
echo -e "\n${GREEN}Build successful! Your Wasm SDK is ready in the 'dist' directory.${NC}"
ls -l dist
