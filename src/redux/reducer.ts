// 根reducers
import { combineReducers } from "redux"
import authReducer from "./auth"
import { IAuthState } from "./auth/types"

export interface IRootReducer {
    authReducer: IAuthState
}

// 创建根reducer
const rootReducer = combineReducers<IRootReducer>({
    authReducer
})

export default rootReducer
