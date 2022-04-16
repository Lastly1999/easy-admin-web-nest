import history from "@/history"
import { call, put } from "redux-saga/effects"
import { loginAction } from "@/services/api/auth"
import { ILoginFormOptions } from "@/screen/Login/Login"
import { IJsonResult } from "@/types/global"
import { ILoginInfo } from "@/services/model/auth"
import { setAuthInfo } from "../actions/authActions"
import { IAction } from "../types"
import { openNotification } from "@/utils/antd/antd"


export function* fetchLoginAction(payload: IAction<ILoginFormOptions>) {
    try {
        const response: IJsonResult<ILoginInfo> = yield call(loginAction, payload.payload)
        if (response.code === 200) {
            yield put(setAuthInfo(response.data.token))
            history.push("/app/dashboard")
            openNotification({ type: "success", message: "登录成功", description: "可以开始为所欲为啦！" })
        }
    } catch (err) {
        console.error(err)
    }
}