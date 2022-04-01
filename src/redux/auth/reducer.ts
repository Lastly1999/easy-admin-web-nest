import { SET_TOKEN } from "./constants"
import { IAction, IAuthState } from "./types"

const authState: IAuthState = {
    token: null
}

const authReducer = (state = authState, actions: IAction): IAuthState => {
    switch (actions.type) {
        case SET_TOKEN:
            return { ...state, token: actions.payload }
        default:
            return state
    }
}

export default authReducer
