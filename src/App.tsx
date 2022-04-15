import React, { useState } from "react"
import { Route,Switch,useRouteMatch } from "react-router-dom"
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

const App: React.FC<IAppProps> = (props) => {
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
                        padding:"10px",
                        boxSizing: "border-box"
                    }}
                >
                    <Switch>
                        <Route path={`/app/dashboard`} component={Dashboard} />
                        <Route path={`/app/role/role`} component={RolePanel} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
