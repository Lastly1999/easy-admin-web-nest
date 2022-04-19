import React, { useEffect, useState } from "react"
import { Switch, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { getSysRoles, updateSysRoleStatus } from "@/services/api/role"
import { IRoleListItem } from "@/services/model/role"
import { openMessage } from "@/utils/antd/antd"

type IRoleTableProps = {
    rowEdit: (id: number) => void
}

const RoleTable: React.FC<IRoleTableProps> = (props) => {

    // 加载状态
    const [tableLoading, setTableLoading] = useState<boolean>(false)

    // 更新角色状态
    const updateStatus = async (roleId: number, status: boolean) => {
        const openFlag = status ? 1 : 0
        const { code } = await updateSysRoleStatus(roleId, openFlag)
        if (code === 200) {
            fetchRoleList()
            openMessage({ type: "success", content: "修改状态成功！" })
        }
    }

    const rowEdit = (data: IRoleListItem) => {
        if (props.rowEdit) props.rowEdit(data.id)
    }

    const columns: ColumnsType<any> = [
        { title: '角色id', dataIndex: 'roleId', key: 'roleId' },
        { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
        { title: '角色别名', dataIndex: 'describe', key: 'describe' },
        {
            title: '启用状态', dataIndex: 'status', key: 'status', render: (status: boolean, data: IRoleListItem) => (
                <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={status} onChange={(val: boolean) => updateStatus(data.roleId, val)} />
            )
        },
        { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
        { title: '最近更新时间', dataIndex: 'updatedAt', key: 'updatedAt' },
        {
            title: '编辑',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (_, data: IRoleListItem) => <a onClick={() => rowEdit(data)}>编辑</a>,
        },
    ]

    // 角色列表
    const [roleList, setRoleList] = useState<IRoleListItem[]>([])

    // 请求角色列表
    const fetchRoleList = async () => {
        setTableLoading(true)
        const ret = await getSysRoles()
        if (ret.code === 200) setRoleList(ret.data.roles)
        setTableLoading(false)
    }

    useEffect(() => {
        fetchRoleList()
    }, [])

    return (
        <Table loading={tableLoading} className="custom-table" columns={columns} dataSource={roleList} />
    )
}

export default RoleTable