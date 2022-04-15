import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout } from "antd"

// global components
import SystemMenu from "@/components/SystemMenu/SystemMenu"

import Dashboard from "@/screen/Dashboard/Dashboard"
import RolePanel from "@/screen/RolePanel/RolePanel"

import "./app.less"

const { Header, Content, Sider } = Layout

export type IAppProps = {
    children?: React.ReactNode
}

const App: React.FC = (props: IAppProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (): void => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider width={250} trigger={null} collapsible collapsed={collapsed} theme="dark">
                <div className="logo" />
                <SystemMenu />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background site-layout-header" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: "trigger",
                        onClick: onCollapse
                    })}
                </Header>
                <Content
                    style={{
                        overflowY: "auto",
                        boxSizing: "border-box"
                    }}
                >
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="role/role" element={<RolePanel />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
