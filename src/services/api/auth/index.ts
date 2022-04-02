import httpRequest from "@/utils/axios/httpRequest"
import { IGraphicCodeInfo, ILoginForm } from "@/services/model/auth"

// 授权登录
export const loginAction = (data: ILoginForm) => {
    return httpRequest.post("/auth/login", data)
}

// 获取图形验证码
export const getGraphicCode = () => {
    return httpRequest.get<any, IGraphicCodeInfo>("/auth/code")
}
