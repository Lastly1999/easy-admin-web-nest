
import React, { useEffect, useState } from "react"
import { Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { getSystemAllRoleUsers } from "@/services/api/user"
import { IGlobalQueryModel } from "@/services/model/global"

const RoleUserTable: React.FC = () => {

    const [roleUserList, setRoleUserList] = useState([])

    const [queryForm, setQueryForm] = useState<IGlobalQueryModel>({
        pageSize: 10,
        pageNum: 1,
        keywords: '',
        startTime: null,
        endTime: null,
    })

    const columns: ColumnsType<any> = [
        { title: '角色id', dataIndex: 'roleId', key: 'roleId' },
    ]

    const fetchSystemRoleUsers = async () => {
        const ret = await getSystemAllRoleUsers(queryForm)
    }

    useEffect(() => {
        fetchSystemRoleUsers()
    }, [])

    return (
        <Table className="custom-table" columns={columns} dataSource={roleUserList} />
    )
}

export default RoleUserTable