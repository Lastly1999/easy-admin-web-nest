/// <reference types="vite/client" />

interface ImportMetaEnv {
    // 服务地址
    VITE_APP_API_URL: string
    // 服务上下文
    VITE_APP_BASE_API_URL: string
    // 超时时间 此处必须使用string类型 否则vite的builder会报类型参数错误
    VITE_APP_TIME_OUT: string
    // 更多环境变量...
}
