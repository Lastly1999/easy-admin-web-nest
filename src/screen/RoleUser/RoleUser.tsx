import React, { useEffect, useState } from 'react'

// global components
import EasyContainer from "@/components/EasyContainer/EasyContainer"

// components
import RoleUserTable from './components/RoleUserTable/RoleUserTable'
import { getSystemAllRoleUsers } from '@/services/api/user'
import { IGlobalQueryModel } from '@/services/model/global'
import { IRoleUsersItem } from '@/services/model/user'

const RoleUser: React.FC = () => {

    const [roleUserList, setRoleUserList] = useState<IRoleUsersItem[]>([])

    const [queryForm, setQueryForm] = useState<IGlobalQueryModel>({
        pageSize: 10,
        pageNum: 1,
        keywords: '',
        startTime: '',
        endTime: '',
    })

    const [roleTableLoading, setRoleTableLoading] = useState<boolean>(false)     

    const fetchSystemRoleUsers = async () => {
        setRoleTableLoading(true)
        const { code, data } = await getSystemAllRoleUsers(queryForm)
        if (code === 200) {
            setRoleUserList(data.users)
        }
        setRoleTableLoading(false)
    }

    useEffect(() => {
        fetchSystemRoleUsers()
    }, [])

    return (
        <EasyContainer>
            <RoleUserTable data={roleUserList} loading={roleTableLoading}></RoleUserTable>
        </EasyContainer>
    )
}

export default RoleUser