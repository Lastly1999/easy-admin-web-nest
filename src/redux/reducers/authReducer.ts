import { ILoginFormOptions } from "@/screen/Login/Login"
import { IRolesSystemMenus } from "@/services/model/auth"
import { handleActions as createReducers } from "redux-actions"
import { AuthActionTypes } from "../actions/authActions"
import { IAction } from "../types"

export type IAuthState = {
    token: string | null,
    roleMenus: IRolesSystemMenus[] | null
}

export type IAuthActionPayload = {
    token: string
    roleMenus: IRolesSystemMenus[]
}

const authState: IAuthState = {
    token: null,
    roleMenus: null
}

export default createReducers({
    // 设置授权状态 jwt
    [AuthActionTypes.SET_AUTH_INFO]: (state, payload: IAction<IAuthActionPayload>) => ({
        ...state,
        token: payload.payload.token
    }),
    // 设置系统权限菜单
    [AuthActionTypes.SET_SYSTEM_MENUS]: (state, payload: IAction<IAuthActionPayload>) => {
        return {
            ...state,
            roleMenus: payload.payload.roleMenus
        }
    }
}, authState)
