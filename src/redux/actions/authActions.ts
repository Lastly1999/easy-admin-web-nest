import { FETCH_LOGIN_ACTION, SET_AUTH_INFO } from "@/redux/actionTypes/authActionTypes"
import { ILoginFormOptions } from "@/screen/Login/Login"


export const setAuthInfo = (token:string) => ({
    type:SET_AUTH_INFO,
    payload:{ token }
})

export const fetchLoginAction = (payload:ILoginFormOptions) => ({
    type:FETCH_LOGIN_ACTION,
    payload
})
