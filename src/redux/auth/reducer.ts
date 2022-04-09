import { SET_AUTH_MENUS, SET_TOKEN } from "./constants"
import { IAction, IAuthState } from "./types"

const authState: IAuthState = {
    token: null,
    authMenus: []
}

const authReducer = (state = authState, actions: IAction): IAuthState => {
    switch (actions.type) {
        case SET_TOKEN:
            localStorage.setItem("accessToken", actions.payload)
            return { ...state, token: actions.payload }
        case SET_AUTH_MENUS:
            return { ...state, authMenus: actions.payload }
        default:
            return state
    } 
}

export default authReducer
