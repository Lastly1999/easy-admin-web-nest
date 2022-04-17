import { IRolesSystemMenus } from "@/services/model/auth"
import { createAction } from "redux-actions"

export const AuthActionTypes = {
    SET_AUTH_INFO: "SET_AUTH_INFO",
    FETCH_LOGIN_ACTION: "FETCH_LOGIN_ACTION",
    UPDATE_AUTH_INFO: "UPDATE_AUTH_INFO",
    FETCH_SYSTEM_MENUS: "FETCH_SYSTEM_MENUS",
    SET_SYSTEM_MENUS: "SET_SYSTEM_MENUS"
}

// 设置授权信息
export const setAuthInfo = createAction(AuthActionTypes.SET_AUTH_INFO, (token: string) => ({ token }))

// 登录授权表
export const fetchLoginAction = createAction(AuthActionTypes.FETCH_LOGIN_ACTION)

// 获取权限菜单
export const fetchSystemRoleMenus = createAction(AuthActionTypes.FETCH_SYSTEM_MENUS)

// 设置权限菜单
export const setSystemMenus = createAction(AuthActionTypes.SET_SYSTEM_MENUS, (roleMenus: IRolesSystemMenus[]) => ({ roleMenus }))

// 更新授权信息
export const updateAuthInfo = createAction(AuthActionTypes.UPDATE_AUTH_INFO)