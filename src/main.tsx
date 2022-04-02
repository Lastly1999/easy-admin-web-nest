import ReactDOM from "react-dom"
import Page from "./Page"
import store from "@/redux"
import { Provider } from "react-redux"
import "antd/dist/antd.css"
import "@/style/global.less"

ReactDOM.render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById("root")
)
