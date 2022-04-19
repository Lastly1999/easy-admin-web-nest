import React, { useState } from "react"
import { Form, FormInstance, Input, Modal } from "antd"


type IRoleModalFormProps = {
    visible: boolean
    title: string
    roleId?: number
    onOK: () => void
    onCancel: () => void
}

const RoleModalForm: React.FC<IRoleModalFormProps> = (props) => {

    const [roleModalForm, setRoleModalForm] = useState<FormInstance<any>>()

    const onFinish = (values: any) => {
        if (values) onConfirm()
    }

    const onConfirm = () => {
        if (props.onOK) props.onOK()
    }

    const onCancel = () => {
        if (props.onCancel) props.onCancel()
    }

    return (
        <Modal title={props.title} centered visible={props.visible} onOk={onConfirm} onCancel={onCancel} width={600} >
            <Form name="roleForm" form={roleModalForm} onFinish={onFinish} initialValues={roleModalForm} scrollToFirstError >
                <Form.Item name="roleName" label="角色名称" >
                    <Input />
                </Form.Item>
                <Form.Item name="describe" label="角色别名" >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RoleModalForm