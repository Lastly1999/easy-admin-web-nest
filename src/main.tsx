import ReactDOM from "react-dom"
import Page from "./Page"
import store, { persistor } from "@/redux"
import { Provider } from "react-redux"
import "antd/dist/antd.css"
import "@/style/global.less"
import { PersistGate } from "redux-persist/integration/react"

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Page />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
)
