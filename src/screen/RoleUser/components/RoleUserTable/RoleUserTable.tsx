
import React from "react"
import { Select, Switch, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { IRoleUsersItem, IUserRoleItem } from "@/services/model/user"

export type IRoleUserProps = {
    loading:boolean
    data: IRoleUsersItem[]
}

const RoleUserTable: React.FC<IRoleUserProps> = (props) => {

    const updateStatus = (roleId: number, status: boolean) => {
        console.log(roleId)
        console.log(status)
    }

    const roleSwitchEdit = () => {
        console.log('log')
    }

    const generateRoleListSelect = (role: IUserRoleItem[], data: IRoleUsersItem) => {
        return (
            <Select mode="multiple" fieldNames={{ label: "roleName", value: "roleId" }} options={role} style={{ width: '100%' }} placeholder="请选择角色" value={data.roleId} onChange={roleSwitchEdit} />
        )
    }

    const generateRoleListSwitch = (status: boolean, data: IRoleUsersItem) => {
        return (
            <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={status} onChange={(val: boolean) => updateStatus(data.id, val)} />
        )
    }

    const columns: ColumnsType<any> = [
        { title: '角色id', dataIndex: 'id', key: 'id' },
        { title: '账户名', dataIndex: 'userName', key: 'userName' },
        { title: '用户头像', dataIndex: 'userAvatar', key: 'userAvatar' },
        { title: '用户昵称', dataIndex: 'nikeName', key: 'nikeName' },
        { title: '启用状态', dataIndex: 'status', key: 'status', render: generateRoleListSwitch },
        { title: '用户角色', dataIndex: "role", key: "role", render: generateRoleListSelect },
    ]

    
    return (
        <Table className="custom-table" loading={props.loading} columns={columns} dataSource={props.data} />
    )
}

export default RoleUserTable