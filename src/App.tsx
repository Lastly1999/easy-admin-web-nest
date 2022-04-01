import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"
import React, { useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Dashboard from "@/screen/Dashboard/Dashboard"
import "./app.less"

const { Header, Content, Sider } = Layout

const menus = [
    {
        title: "工作台",
        key: "/app/dashboard"
    },
    {
        title: "权限管理",
        key: "/app/role"
    }
]

export type IMenuClickEvent = {
    key: string
    keyPath: string[]
}

const App: React.FC = props => {
    const location = useLocation()

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (): void => {
        setCollapsed(!collapsed)
    }

    const sysMenuChange = (val: {}) => {
        console.log(val)
    }

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider width={250} trigger={null} collapsible collapsed={collapsed} theme="dark">
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} onClick={sysMenuChange}>
                    {menus.map(item => (
                        <Menu.Item key={item.key}>{item.title}</Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: "trigger",
                        onClick: onCollapse
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280
                    }}
                >
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />}></Route>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
