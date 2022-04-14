import {call,put} from "redux-saga/effects"
import {loginAction} from "@/services/api/auth"
import {Action} from "redux"
import { ILoginFormOptions } from "@/screen/Login/Login"
import { IJsonResult } from "@/types/global"
import { ILoginInfo } from "@/services/model/auth"
import { setAuthInfo } from "@/redux/actions/authActions"
import history from "@/history"

export interface IAction<T = any> extends Action {
    payload:T
}


export function* fetchLoginAction(payload: IAction<ILoginFormOptions>){
    try{
        const response:IJsonResult<ILoginInfo> = yield call(loginAction, payload.payload)
        yield put(setAuthInfo(response.data.accessToken))
        history.push("/app/dashboard")
    }catch (err){
        console.log(err)
    }
}