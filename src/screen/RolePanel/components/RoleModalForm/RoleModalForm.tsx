import React, { useEffect, useState } from "react"
import { Form, FormInstance, Input, Modal } from "antd"
import { IFormRules } from "@/types/global"


type IRoleModalFormProps = {
    visible: boolean
    title: string
    roleId?: number
    onOK: (form: IRoleForm) => void
    onCancel: () => void
}

export type IRoleForm = {
    roleName: string
    describe: string
}

const RoleModalForm: React.FC<IRoleModalFormProps> = (props) => {

    const formRules: IFormRules = {
        roleName: [{ required: true, message: "角色名称不能为空" }],
        describe: [{ required: true, message: "角色别名不能为空" }]
    }

    const [roleForm] = Form.useForm<IRoleForm>()

    const [roleModalForm, setRoleModalForm] = useState({})

    const onConfirm = () => roleForm.submit()

    const onFinish = (form: IRoleForm) => {
        if (props.onOK) props.onOK(form)
    }

    const onCancel = () => {
        if (props.onCancel) props.onCancel()
    }

    useEffect(() => {
        if (!props.visible) {
            setRoleModalForm({})
            roleForm.resetFields()
        }
    }, [props.visible])

    return (
        <Modal title={props.title} centered visible={props.visible} onOk={onConfirm} onCancel={onCancel} width={600} >
            <Form name="roleForm" scrollToFirstError form={roleForm} initialValues={roleModalForm} onFinish={onFinish} >
                <Form.Item name="roleName" label="角色名称" rules={formRules.roleName}>
                    <Input placeholder="请输入角色名称" />
                </Form.Item>
                <Form.Item name="describe" label="角色别名" rules={formRules.describe}>
                    <Input placeholder="角色别名" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RoleModalForm