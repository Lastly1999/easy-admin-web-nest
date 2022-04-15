import { IAction } from "@/redux/sagas/authSagas"
import { ILoginFormOptions } from "@/screen/Login/Login"
import { handleActions as createReducers, combineActions } from "redux-actions"
import authActions, { AuthActionTypes } from "../actions/authActions"
import { IRootState } from ".."

export type IAuthState = {
    token: string | null
}

const authState: IAuthState = {
    token: null
}

export default createReducers({
    [combineActions(AuthActionTypes.FETCH_LOGIN_ACTION)]: (state: IRootState, payload: IAction<ILoginFormOptions>) => ({
        ...state,
        payload
    }),
}, authState)