import React from "react"
import Login from "@/screen/Login/Login"
import App from "./App"
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom"

const Page: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/app/*" element={<App />}></Route>
                <Route path="*" element={<Navigate replace to="/login" />}></Route>
            </Routes>
        </Router>
    )
}

export default Page
