import React from "react"
import { Route, Routes } from "react-router-dom"

// router
import Dashboard from "../../screen/Dashboard/Dashboard"

const Content: React.FC = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Content
