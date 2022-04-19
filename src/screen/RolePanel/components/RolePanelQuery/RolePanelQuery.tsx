import { getSysRoles } from "@/services/api/role"
import { Button, Form, Input } from "antd"
import React, { useEffect } from "react"
import "./rolePanelQuery.less"

type IRolePanelQueryProps = {
    addUser: () => void
}

const RolePanelQuery: React.FC<IRolePanelQueryProps> = (props) => {

    const onSearch = () => {}

    const addUser = () => {
        if (props.addUser) props.addUser()
    }

    return <div className="role-panel-query">
        <Form name="basic" layout="inline" initialValues={{ remember: true }} onFinish={onSearch} autoComplete="off">
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={addUser}>
                    新增用户
                </Button>
            </Form.Item>
            <Form.Item name="username">
                <Input placeholder="请输入角色名称，ID或者权限" />
            </Form.Item>
        </Form>
    </div>
}

export default RolePanelQuery