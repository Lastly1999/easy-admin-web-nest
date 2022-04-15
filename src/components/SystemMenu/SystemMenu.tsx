import { Menu } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"
import React from "react"
import { useNavigate } from "react-router-dom"

export interface MenuInfo {
    key: string
    keyPath: string[]
    item: React.ReactInstance
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}

const menus = [
    {
        title: "工作台",
        key: "/app/dashboard",
        children: []
    },
    {
        title: "权限管理",
        key: "/app/role",
        children: [
            {
                title: "角色管理",
                key: "/app/role/role"
            },
            {
                title: "用户管理",
                key: "/app/role/user"
            }
        ]
    }
]

const SystemMenu: React.FC = () => {
    const navigate = useNavigate()

    const sysMenuChange = (val: MenuInfo) => {
        navigate(val.key)
    }

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]} onClick={sysMenuChange}>
            {menus.map(item =>
                item.children.length > 0 ? (
                    <SubMenu title={item.title} key={item.key}>
                        {item.children.map(cItem => (
                            <Menu.Item key={cItem.key}>{cItem.title}</Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item key={item.key}>{item.title}</Menu.Item>
                )
            )}
        </Menu>
    )
}

export default SystemMenu