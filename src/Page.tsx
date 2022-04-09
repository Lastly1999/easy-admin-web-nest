import React, { useEffect } from "react"
import Login from "@/screen/Login/Login"
import App from "./App"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { feachSystemMenus } from "./redux/auth/actions"

const Page: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(feachSystemMenus)
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/app/*" element={<App />}></Route>
                <Route path="*" element={<Navigate replace to="/login" />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Page
