import reducer from "./reducer"
import { createStore } from "redux"
import { IRootReducer } from "./reducer"

const store = createStore(reducer)
export default store

export type { IRootReducer }
