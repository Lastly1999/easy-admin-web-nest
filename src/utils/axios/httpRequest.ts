import HttpInterceptor from "./interceptor"

/**
 * http request create for HttpInterceptor class instance
 */
const httpRequest = new HttpInterceptor({
    baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    timeout: import.meta.env.VITE_APP_TIME_OUT,
    interceptor: {
        requestInterceptors: config => config,
        requestInterceptorsCatch: eof => eof,
        responseInterceptors: response => {
            return response
        },
        responseInterceptorsCatch: eof => eof
    }
})

export default httpRequest
