import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Login from "@/screen/Login/Login"
import App from "./App"
import { Route, Router, Switch, Redirect } from "react-router-dom"
import history from "./history"
import { IRootState } from "@/redux"
import { getRoleAuthMenus } from "@/services/api/auth"
import { getSysIcons } from "@/services/api/sys"

const Page: React.FC = () => {

    const selection = useSelector((state: IRootState) => state)

    useEffect(() => {
        console.log(selection.authReducer.token)
    }, [selection])

    useEffect(() => {
        getRoleAuthMenus().then(res => {
            console.log(res)
        })
        getSysIcons().then(res => {
            console.log(res)
        })
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
