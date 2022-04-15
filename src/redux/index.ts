import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"
import appSagas from "@/redux/sagas"

//  实例化saga中间件
const sagaMiddleware = createSagaMiddleware()

export type IRootState = ReturnType<typeof rootReducer>

// 创建redux store 仓库 第一个参数为reducer的集合 第二参数为初始化的state 第三个参数为引用的redux中间件
export default createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))

// 启动sagas
sagaMiddleware.run(appSagas)