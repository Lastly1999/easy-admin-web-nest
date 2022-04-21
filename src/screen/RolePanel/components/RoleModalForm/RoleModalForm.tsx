import React, { useEffect, useState } from "react"
import { Form, FormInstance, Input, Modal } from "antd"
import { IFormRules } from "@/types/global"
import { getSysRoleInfo } from "@/services/api/role"


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

    const [roleModalForm, setRoleModalForm] = useState()

    const formRules: IFormRules = {
        roleName: [{ required: true, message: "角色名称不能为空" }],
        describe: [{ required: true, message: "角色别名不能为空" }]
    }

    const [roleForm] = Form.useForm<IRoleForm>()

    const onConfirm = () => roleForm.submit()

    const onFinish = (form: IRoleForm) => {
        if (props.onOK) props.onOK(form)
    }

    const onCancel = () => {
        if (props.onCancel) props.onCancel()
    }

    useEffect(() => {
        return () => roleForm.resetFields() // 副作用清除时 清空表单信息
    }, [])

    useEffect(() => {
        initFormData()
    }, [props.roleId])

    // 获取表单数据 / 编辑 / 新增
    const initFormData = async () => {
        if (props.roleId) {
            const ret = await getSysRoleInfo(props.roleId)
            setRoleModalForm(() => ({ ...ret.data }))
            roleForm.setFieldsValue(ret.data)
        }
    }

    return (
        <Modal centered destroyOnClose title={props.title} visible={props.visible} onOk={onConfirm} onCancel={onCancel} width={600} >
            <Form name="roleForm" scrollToFirstError initialValues={roleModalForm} form={roleForm} onFinish={onFinish} preserve={false}>
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