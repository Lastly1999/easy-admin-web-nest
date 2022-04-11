import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"

//  实例化saga中间件
const sagaMiddleware = createSagaMiddleware()

// 第一个参数 reducers
export default createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))