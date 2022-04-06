import httpRequest from "@/utils/axios/httpRequest"
import { IGraphicCodeInfo, ILoginForm, ILoginInfo, IRoleAuthMenus } from "@/services/model/auth"

// 授权登录
export const loginAction = (data: ILoginForm) => {
    return httpRequest.post<any, ILoginInfo>("/auth/login", data)
}

// 获取图形验证码
export const getGraphicCode = () => {
    return httpRequest.get<any, IGraphicCodeInfo>("/auth/code")
}

// 获取角色系统菜单
export const getRoleAuthMenus = () => {
    return httpRequest.get<any, IRoleAuthMenus>("/auth/menu")
}
