import { combineReducers } from "redux"
import authReducer from "@/redux/reducers/authReducer"
import systemReducer from "@/redux/reducers/systemReducer"

// app reducers 收集
const rootReducer = combineReducers({
    authReducer,
    systemReducer
})

export default rootReducer