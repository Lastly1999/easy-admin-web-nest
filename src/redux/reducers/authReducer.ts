import { ILoginFormOptions } from "@/screen/Login/Login"
import { handleActions as createReducers } from "redux-actions"
import { AuthActionTypes } from "../actions/authActions"
import { IAction } from "../types"

export type IAuthState = {
    token: string | null
}

const authState: IAuthState = {
    token: null
}

export default createReducers({
    // [AuthActionTypes.FETCH_LOGIN_ACTION]: (state, payload: IAction<ILoginFormOptions>) => ({
    //     ...state
    // }),
    [AuthActionTypes.SET_AUTH_INFO]: (state, payload: IAction<{ token: string }>) => {
        console.log(payload)
        return {
            ...state,
            token: payload.payload.token
        }
    }
}, authState)
