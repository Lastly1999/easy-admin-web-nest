import { createAction } from "redux-actions"

export const AuthActionTypes = {
    SET_AUTH_INFO: "SET_AUTH_INFO",
    FETCH_LOGIN_ACTION: "FETCH_LOGIN_ACTION",
    UPDATE_AUTH_INFO: "UPDATE_AUTH_INFO"
}

// 设置授权信息
export const setAuthInfo = createAction(AuthActionTypes.SET_AUTH_INFO, (token: string) => {
    console.log(token)
    return{
        token
    }
})

// 登录授权表
export const fetchLoginAction = createAction(AuthActionTypes.FETCH_LOGIN_ACTION)

// 更新授权信息
export const updateAuthInfo = createAction(AuthActionTypes.UPDATE_AUTH_INFO)