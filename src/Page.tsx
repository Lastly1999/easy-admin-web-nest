import React, { useEffect } from "react"
import Login from "@/screen/Login/Login"
import history from "./history"
import App from "./App"
import { useDispatch, useSelector } from "react-redux"
import { Route, Router, Switch, Redirect } from "react-router-dom"
import { IRootState } from "@/redux"
import { fetchSystemRoleMenus } from "@/redux/actions/authActions"
import { fetchSystemIcons } from "@/redux/actions/systemActions"

const Page: React.FC = () => {

    const dispatch = useDispatch()

    const selection = useSelector((state: IRootState) => state)

    useEffect(() => {
        console.log(selection.authReducer.token)
    }, [selection])

    const initSystemApis = () => {
        // if (history.location.pathname !== "/login") {
        //     if (!selection.authReducer.roleMenus) {
        //         dispatch(fetchSystemRoleMenus())
        //     }
        //     if (!selection.systemReducer.sysIcons) {
        //         dispatch(fetchSystemIcons())
        //     }
        // }
    }

    useEffect(() => {
        initSystemApis()
    })

    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/app/*" component={App} />
                <Redirect path="*" to="/login"></Redirect>
            </Switch>
        </Router>
    )
}

export default Page
