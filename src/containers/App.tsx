import * as React from "react"
import {Routes,Route,Navigate} from "react-router-dom"
import Login from "../screen/Login/Login"
import "./app.less"

const App = () => {
    return (
        <div className="app">
            <Routes>
                 <Route path="/login" element={<Login />}/>
                 <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    )
}

export default App