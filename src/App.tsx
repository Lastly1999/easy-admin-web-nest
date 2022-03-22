import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"
import React, { useState } from "react"
import "./app.less"

const { Header, Content, Sider } = Layout

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = (): void => {
        setCollapsed(!collapsed)
    }

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
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
                    Content
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
