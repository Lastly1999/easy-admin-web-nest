import { IAction } from "@/redux/sagas/authSagas"
import { SET_AUTH_INFO } from "@/redux/actionTypes/authActionTypes"

export type IAuthState = {
    token: string | null
}

const authState: IAuthState = {
    token: null
}

const authReducer = (state = authState, action: IAction) => {
    console.log(action)
    switch (action.type) {
        case SET_AUTH_INFO:
            return {...state, token:action.payload.token}
        default:
            return state
    }
}

export default authReducer