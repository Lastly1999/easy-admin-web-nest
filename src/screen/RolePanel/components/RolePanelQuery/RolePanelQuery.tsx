import { getSysRoles } from "@/services/api/role"
import { Button, Form, Input } from "antd"
import React, { useEffect } from "react"
import "./rolePanelQuery.less"

const RolePanelQuery: React.FC = () => {
    
    const onSearch = () => {

    }

    return <div className="role-panel-query">
        <Form name="basic" layout="inline" initialValues={{ remember: true }} onFinish={onSearch} autoComplete="off">
            <Form.Item name="username">
                <Input placeholder="请输入角色名称，ID或者权限"/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    查询
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default RolePanelQuery