import React from "react"
import Login from "@/screen/Login/Login"
import App from "./App"
import { Route, Router, Switch,Redirect } from "react-router-dom"
import history from "./history"

const Page: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/app/*" component={App}/>
                <Redirect path="*" to="/login"></Redirect>
            </Switch>
        </Router>
    )
}

export default Page
