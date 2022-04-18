import HttpInterceptor from "./interceptor"
import { openNotification } from "@/utils/antd/antd"
import { IJsonResult } from "@/types/global"
import store from "@/redux"
import history from "@/history"

type IHttpHeadersOptions = {
    [index: string]: string | null
}

/**
 * http request create for HttpInterceptor class instance
 */
const httpRequest = new HttpInterceptor({
    baseURL: import.meta.env.VITE_APP_BASE_API_URL,
    timeout: Number(import.meta.env.VITE_APP_TIME_OUT),
    interceptor: {
        requestInterceptors: (config) => {
            const storeState = store.getState();
            (config.headers as IHttpHeadersOptions)["authorization"] = storeState.authReducer.token
            return config
        },
        requestInterceptorsCatch: eof => eof,
        responseInterceptors: response => {
            if (response.data.code !== 200) handelApiError(response.data)
            return response
        },
        responseInterceptorsCatch: eof => {
            if (eof.response.status === 401) {
                jwtInvalidHandler(eof.response.status)
            }
            handelHttpError(eof.response.data.msg)
            throw new Error(eof.response.data.msg);
        }
    }
})

const jwtInvalidHandler = (code: number) => {
    if (code === 401) {
        history.replace("/login")
        sessionStorage.removeItem("persist:root")
    }
}

const handelApiError = <T>(data: IJsonResult<T>) => {
    return openNotification({ type: "error", message: "温馨提示", description: data.msg })
}

const handelHttpError = (description: string) => {
    return openNotification({ type: "error", message: "出错啦!", description })
}

export default httpRequest
