import { applyMiddleware, createStore } from "redux"

import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"

// 使用redux-saga中间件
const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))