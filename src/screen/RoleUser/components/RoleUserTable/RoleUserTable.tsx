
import React, { useEffect, useState } from "react"
import { Select, Switch, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { getSystemAllRoleUsers } from "@/services/api/user"
import { IGlobalQueryModel } from "@/services/model/global"
import { IRoleUsersItem, IUserRoleItem } from "@/services/model/user"

const RoleUserTable: React.FC = () => {

    const [roleUserList, setRoleUserList] = useState<IRoleUsersItem[]>([])

    const [queryForm, setQueryForm] = useState<IGlobalQueryModel>({
        pageSize: 10,
        pageNo: 1,
        keywords: '',
        startTime: '',
        endTime: '',
    })

    const updateStatus = (roleId: number, status: boolean) => {
        console.log(roleId)
        console.log(status)
    }

    const roleSwitchEdit = () => {
        console.log('log')
    }

    const generateRoleListSelect = (roles: IUserRoleItem[], data: IRoleUsersItem) => {
        return (
            <Select mode="multiple" fieldNames={{ label: "roleName", value: "roleId" }} options={roles} style={{ width: '100%' }} placeholder="请选择角色" value={data.roleId} onChange={roleSwitchEdit} />
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
        { title: '用户角色', dataIndex: "roles", key: "roles", render: generateRoleListSelect },
    ]

    const fetchSystemRoleUsers = async () => {
        const { code, data } = await getSystemAllRoleUsers(queryForm)
        if (code === 200) {
            setRoleUserList(data)
        }
    }

    useEffect(() => {
        fetchSystemRoleUsers()
    }, [])

    return (
        <Table className="custom-table" columns={columns} dataSource={roleUserList} />
    )
}

export default RoleUserTable