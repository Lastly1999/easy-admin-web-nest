import React from "react"
import { IndexRouteProps, LayoutRouteProps, Navigate, PathRouteProps, Route } from "react-router-dom"

const PrivateRoute:React.FC = (props: PathRouteProps | LayoutRouteProps | IndexRouteProps) => {
    const isLogin = localStorage.getItem("accessToken")
    return isLogin ? <Route path="/app/*" element={props.element}></Route> : <Route path="*" element={<Navigate to="/login" />} />
}

export default PrivateRoute
