import { Button, Form, Input } from "antd"
import React from "react"
import "./rolePanelQuery.less"

const RolePanelQuery: React.FC = () => {

    const onSearch = () => {

    }

    return <div className="role-panel-query">
        <Form name="basic" initialValues={{ remember: true }} onFinish={onSearch} autoComplete="off">
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
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