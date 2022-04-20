import history from "@/history"
import { call, put } from "redux-saga/effects"
import { getRoleAuthMenus, loginAction } from "@/services/api/auth"
import { ILoginFormOptions } from "@/screen/Login/Login"
import { IJsonResult } from "@/types/global"
import { ILoginInfo, IRolesSystemMenus } from "@/services/model/auth"
import { setAuthInfo, setSystemMenus } from "../actions/authActions"
import { IAction } from "../types"
import { openNotification } from "@/utils/antd/antd"
import { getSystemIcons } from "@/services/api/sys"
import { ISystemSetingIcons } from "@/services/model/system"
import { setSystemIcons } from "../actions/systemActions"

// 授权登录
export function* fetchLoginAction(payload: IAction<ILoginFormOptions>) {
    try {
        const response: IJsonResult<ILoginInfo> = yield call(loginAction, payload.payload)
        if (response.code === 200) {
            yield put(setAuthInfo(response.data.accessToken))
            history.push("/app/dashboard")
            openNotification({ type: "success", message: "登录成功", description: "可以开始为所欲为啦！" })
        }
    } catch (err) {
        console.error(err)
    }
}

// 请求系统菜单权限
export function* fetchSystemRoleMenus() {
    try {
        const response: IJsonResult<{ menus: IRolesSystemMenus[] }> = yield call(getRoleAuthMenus)
        if (response.code === 200) {
            yield put(setSystemMenus(response.data.menus))
        }
    } catch (err) {
        console.error(err)
    }
}

// 请求系统图标
export function* fetchSystemSetingsIcons() {
    try {
        const response: IJsonResult<{ icons: ISystemSetingIcons[] }> = yield call(getSystemIcons)
        if(response.code === 200){
            yield put(setSystemIcons(response.data.icons))
        }
    } catch (err) {
        console.error(err)
    }
}