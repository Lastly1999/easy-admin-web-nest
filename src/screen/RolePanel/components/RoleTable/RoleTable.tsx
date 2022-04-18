import React, { useEffect, useState } from "react"
import { Switch, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { getSysRoles } from "@/services/api/role"
import { IRoleListItem } from "@/services/model/role"

type IRoleTableProps = {}

const RoleTable: React.FC<IRoleTableProps> = (props) => {

    const updateStatus = (status:boolean) => {
        console.log(status)
    }

    const columns: ColumnsType<any> = [
        { title: '角色id', dataIndex: 'roleId', key: 'roleId' },
        { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
        { title: '角色别名', dataIndex: 'describe', key: 'describe' },
        {
            title: '启用状态', dataIndex: 'status', key: 'status', render: (status: boolean) => (
                <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={status} onChange={updateStatus}/>
            )
        },
        { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
        { title: '最近更新时间', dataIndex: 'updatedAt', key: 'updatedAt' },
        {
            title: '编辑',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>编辑</a>,
        },
    ]

    // 角色列表
    const [roleList, setRoleList] = useState<IRoleListItem[]>([])

    // 请求角色列表
    const fetchRoleList = async () => {
        const ret = await getSysRoles()
        if (ret.code === 200) setRoleList(ret.data.roles)
    }

    useEffect(() => {
        fetchRoleList()
    }, [])

    return (
        <Table className="custom-table" columns={columns} dataSource={roleList} />
    )
}

export default RoleTable