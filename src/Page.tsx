import React from "react"
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import Login from "@/screen/Login/Login"
// import Content from "@/containers/Content/Content"
import App from "./App"
import Dashboard from "./screen/Dashboard/Dashboard"

const Page: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/app/*" element={<App />}>
                    
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Page
