import { IAction } from "@/redux/sagas/authSagas"
import { ILoginFormOptions } from "@/screen/Login/Login"
import { handleActions as createReducers } from "redux-actions"
import { AuthActionTypes, setAuthInfo } from "../actions/authActions"
import { IRootState } from ".."


export type IAuthState = {
    token: string | null
}

const authState: IAuthState = {
    token: null
}

export default createReducers({
    [AuthActionTypes.FETCH_LOGIN_ACTION]: (state: IRootState, payload: IAction<ILoginFormOptions>) => ({
        ...state,
        payload
    }),
}, authState)