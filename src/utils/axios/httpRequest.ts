import HttpInterceptor from "./interceptor"
import { openNotification } from "@/utils/antd/antd"
import { IJsonResult } from "@/types/global"

/**
 * http request create for HttpInterceptor class instance
 */
const httpRequest = new HttpInterceptor({
    baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    timeout: Number(import.meta.env.VITE_APP_TIME_OUT),
    interceptor: {
        requestInterceptors: config => config,
        requestInterceptorsCatch: eof => eof,
        responseInterceptors: response => {
            if (response.data.code !== 200) handelApiError(response.data)
            return response
        },
        responseInterceptorsCatch: eof => eof
    }
})

const handelApiError = <T>(data: IJsonResult<T>) => {
    return openNotification({ type: "error", message: "温馨提示", description: data.msg })
}

export default httpRequest
