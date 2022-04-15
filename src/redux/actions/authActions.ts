import { ILoginFormOptions } from "@/screen/Login/Login"
import { createActions } from "redux-actions"

export enum AuthActionTypes {
    SET_AUTH_INFO = "SET_AUTH_INFO",
    FETCH_LOGIN_ACTION = "FETCH_LOGIN_ACTION"
}

const authActions = createActions({
    // 设置授权信息
    [AuthActionTypes.SET_AUTH_INFO]: (token: string) => token,
    // 登录授权
    [AuthActionTypes.FETCH_LOGIN_ACTION]: (payload: ILoginFormOptions) => payload
})

export default authActions