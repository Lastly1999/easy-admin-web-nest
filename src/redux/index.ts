import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "@/redux/collectRedcuers"
import appSagas from "./collectSagas"
import { PersistConfig, persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/es/storage/session"

// redux-persist的持久化中间件配置
const persistConfig: PersistConfig<any> = {
    blacklist: ["token"], // 需要缓存的state字段
    storage: storage, // 选择需要的缓存引擎 localStorage 或者 sessionStorage
    key: "root" // 必须设置的key
}

// 使用redux-persist包装reducer
const persistRootReducers = persistReducer(persistConfig, rootReducer)

//  实例化saga中间件
const sagaMiddleware = createSagaMiddleware()

export type IRootState = ReturnType<typeof rootReducer>

// 创建redux store 仓库 第一个参数为reducer的集合 第二参数为初始化的state 第三个参数为引用的redux中间件
const store = createStore(persistRootReducers, {}, applyMiddleware(sagaMiddleware))

export type Dispatch = typeof store.dispatch

// 使用redux-persist包装store 在app主入口的PersistGate组件注入需要使用
export const persistor = persistStore(store)

export default store

// 启动sagas
sagaMiddleware.run(appSagas)