import React, { useEffect, useState } from "react"
import { Switch, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { getSysRoles, updateSysRoleStatus } from "@/services/api/role"
import { IRoleListItem } from "@/services/model/role"
import { openMessage } from "@/utils/antd/antd"

type IRoleTableProps = {
    loading: boolean
    data: IRoleListItem[]
    rowEdit: (id: number) => void
    updateRowStatus: (roleId: number, status: boolean) => void
}

const RoleTable: React.FC<IRoleTableProps> = (props) => {

    const updateStatus = async (roleId: number, status: boolean) => {
        props?.updateRowStatus(roleId, status)
    }

    const rowEdit = (data: IRoleListItem) => {
        props?.rowEdit(data.roleId)
    }

    const generateRowStatusSwitch = (status: boolean, data: IRoleListItem) => {
        return (
            <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={status} onChange={(val: boolean) => updateStatus(data.roleId, val)} />
        )
    }

    const generateRowEdit = (_: any, data: IRoleListItem) => {
        return (
            <a onClick={() => rowEdit(data)}>编辑</a>
        )
    }

    const columns: ColumnsType<any> = [
        { title: '角色id', dataIndex: 'roleId', key: 'roleId' },
        { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
        { title: '角色别名', dataIndex: 'describe', key: 'describe' },
        { title: '启用状态', dataIndex: 'status', key: 'status', render: generateRowStatusSwitch },
        { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
        { title: '最近更新时间', dataIndex: 'updatedAt', key: 'updatedAt' },
        { title: '编辑', key: 'operation', fixed: 'right', width: 100, render: generateRowEdit },
    ]

    return (
        <Table className="custom-table" loading={props.loading} columns={columns} dataSource={props.data} />
    )
}

export default RoleTable