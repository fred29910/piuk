#!/bin/bash

# 脚本出错时立即退出
set -e

# 定义颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 定义阶段名称和对应的执行函数
declare -A STAGES=(
    ["check"]="check_environment"
    ["clean"]="clean_directories"
    ["gogen"]="generate_go_client"
    ["wasm"]="compile_wasm"
    ["ts"]="generate_typescript"
    ["assemble"]="assemble_dts"
)

# 默认执行所有阶段
DEFAULT_STAGES=("check" "clean" "gogen" "wasm" "ts" "assemble")

# 显示帮助信息
show_help() {
    echo "Usage: $0 [OPTIONS] [STAGES...]"
    echo
    echo "Build script with optional stage execution"
    echo
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -l, --list     List available stages"
    echo
    echo "Stages:"
    echo "  check     - Check for required tools"
    echo "  clean     - Clean up and prepare directories"
    echo "  gogen     - Regenerate Go API client"
    echo "  wasm      - Compile Go code to Wasm"
    echo "  ts        - Generate TypeScript types"
    echo "  assemble  - Assemble final .d.ts file"
    echo
    echo "Examples:"
    echo "  $0                    # Execute all stages"
    echo "  $0 wasm ts            # Execute only wasm and ts stages"
    echo "  $0 clean wasm         # Execute clean and wasm stages"
}

# 列出可用阶段
list_stages() {
    echo "Available stages:"
    for stage in "${!STAGES[@]}"; do
        echo "  $stage"
    done
}

# 解析命令行参数
parse_args() {
    local stages_to_run=()
    
    # 如果没有参数，使用默认阶段
    if [ $# -eq 0 ]; then
        stages_to_run=("${DEFAULT_STAGES[@]}")
    else
        # 处理选项和参数
        while [[ $# -gt 0 ]]; do
            case $1 in
                -h|--help)
                    show_help
                    exit 0
                    ;;
                -l|--list)
                    list_stages
                    exit 0
                    ;;
                -*)
                    echo -e "${RED}Error: Unknown option $1${NC}"
                    show_help
                    exit 1
                    ;;
                *)
                    # 检查阶段是否有效
                    if [[ -n "${STAGES[$1]}" ]]; then
                        stages_to_run+=("$1")
                    else
                        echo -e "${RED}Error: Unknown stage '$1'${NC}"
                        echo "Use --list to see available stages"
                        exit 1
                    fi
                    ;;
            esac
            shift
        done
    fi
    
    # 去重并保持顺序
    printf '%s\n' "${stages_to_run[@]}" | awk '!seen[$0]++' | tr '\n' ' '
}

# --- 阶段函数定义 ---

check_environment() {
    echo -e "${GREEN}Step 1: Checking for required tools...${NC}"
    
    # 安装oapi-codegen
    go install github.com/oapi-codegen/oapi-codegen/v2/cmd/oapi-codegen@latest
    
    command -v openapi-generator-cli >/dev/null 2>&1 || { echo -e >&2 "${RED}Error: openapi-generator-cli is not installed. Please install it first.${NC}"; exit 1; }
    command -v tinygo >/dev/null 2>&1 || { echo -e >&2 "${RED}Error: tinygo is not installed. Please install it first (see https://tinygo.org).${NC}"; exit 1; }
    echo "All tools found."
}

clean_directories() {
    echo -e "\n${GREEN}Step 2: Cleaning up and preparing directories...${NC}"
    rm -rf dist build
    mkdir -p dist build
    echo "Cleaned 'dist' and 'build' directories."
}

generate_go_client() {
    echo -e "\n${GREEN}Step 3: Regenerating Go API client...${NC}"
    
    if [ ! -e "goapi/go.mod" ]; then 
        go mod init github.com/fred29910/goapi
    fi 
    
    rm -f goapi/client.gen.go goapi/types.gen.go
    
    oapi-codegen --generate types -o goapi/types.gen.go -package api openapi.yaml
    oapi-codegen --generate client -o goapi/client.gen.go -package api openapi.yaml
    
    echo "Go client regenerated in ./goapi."
}

compile_wasm() {
    echo -e "\n${GREEN}Step 4: Compiling Go code to Wasm...${NC}"
    
    (cd goapi && go mod tidy)
    (cd goapi && tinygo build -o ../dist/lib.wasm -target wasm ./goapi_wasm/main.go)
    
    cp "$(go env GOROOT)/lib/wasm/wasm_exec.js" ./dist/
    echo -e "Wasm binary saved to ${YELLOW}dist/lib.wasm${NC}"
}

generate_typescript() {
    echo -e "\n${GREEN}Step 5: Generating TypeScript types...${NC}"
    yarn gen_ts
    echo "TypeScript types generated in ./build/tsapi."
}

assemble_dts() {
    echo -e "\n${GREEN}Step 6: Assembling final .d.ts file...${NC}"
    DTS_FILE="dist/lib.d.ts"
    
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

    MODEL_FILE="./build/tsapi/src/models.ts"
    if [ -f "$MODEL_FILE" ]; then
        grep -E "^export (interface|type)" "$MODEL_FILE" >> "$DTS_FILE"
        echo "API model types appended to .d.ts."
    else
        echo -e "${YELLOW}Warning: Model file not found at $MODEL_FILE. The .d.ts will not include API types.${NC}"
    fi

    echo -e "Final declaration file saved to ${YELLOW}${DTS_FILE}${NC}"
}

# --- 主执行逻辑 ---

main() {
    local stages_to_run=$(parse_args "$@")
    
    if [ -z "$stages_to_run" ]; then
        echo -e "${RED}Error: No valid stages specified${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Executing stages: ${stages_to_run}${NC}"
    echo
    
    # 按顺序执行指定的阶段
    for stage in $stages_to_run; do
        ${STAGES[$stage]}
    done
    
    echo -e "\n${GREEN}Build successful! Your Wasm SDK is ready in the 'dist' directory.${NC}"
    ls -l dist
}

# 执行主函数
main "$@"
