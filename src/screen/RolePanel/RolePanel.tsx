import React, { useEffect, useState } from "react"
import EasyContainer from "@/components/EasyContainer/EasyContainer"

// components
import RolePanelQuery from "./components/RolePanelQuery/RolePanelQuery"
import RoleTable from "./components/RoleTable/RoleTable"
import RoleModalForm, { IRoleForm } from "./components/RoleModalForm/RoleModalForm"

// apis
import { getSysRoles, putSysRole, updateSysRoleStatus } from "@/services/api/role"
import { openMessage } from "@/utils/antd/antd"
import { IRoleListItem } from "@/services/model/role"

interface IRolePanelProps { }

const RolePanel: React.FC<IRolePanelProps> = () => {

    const [roleModalVisibile, setRoleModalVisibile] = useState<boolean>(false)

    const [roleModalTitle, setRoleModalTitle] = useState<string>("编辑角色信息")

    const roleModalFormSubmit = async (form: IRoleForm) => {
        const { code } = await putSysRole(form)
        if (code === 200) {
            openMessage({ type: "success", content: "新增角色成功！" })
        }
        fetchRoleList()
        setRoleModalVisibile(false)
    }

    const roleModalFormCancel = () => {
        setRoleModalVisibile(false)
    }

    const addUserHandler = () => {
        setCacheRoleId(undefined)
        setRoleModalTitle("新增角色信息")
        setRoleModalVisibile(true)
    }

    const [cacheRoleId, setCacheRoleId] = useState<number>()

    const roleTableEdit = (roleId: number) => {
        setRoleModalVisibile(true)
        setCacheRoleId(roleId)
    }

    // 角色列表
    const [roleList, setRoleList] = useState<IRoleListItem[]>([])

    // 角色列表加载状态
    const [roleTableLoading, setroleTableLoading] = useState<boolean>(false)

    // 请求角色列表
    const fetchRoleList = async () => {
        setroleTableLoading(true)
        const ret = await getSysRoles()
        if (ret.code === 200) setRoleList(ret.data)
        setroleTableLoading(false)
    }

    // 更新角色列表状态
    const updateStatus = async (roleId: number, status: boolean) => {
        const openFlag = status ? 1 : 0
        const { code } = await updateSysRoleStatus(roleId, openFlag)
        if (code === 200) {
            fetchRoleList()
            openMessage({ type: "success", content: "修改状态成功！" })
        }
    }

    useEffect(() => {
        fetchRoleList()
    }, [])

    return (
        <EasyContainer>
            <RolePanelQuery addUser={addUserHandler}></RolePanelQuery>
            <RoleTable loading={roleTableLoading} data={roleList} rowEdit={roleTableEdit} updateRowStatus={updateStatus}></RoleTable>
            <RoleModalForm title={roleModalTitle} visible={roleModalVisibile} roleId={cacheRoleId} onOK={roleModalFormSubmit} onCancel={roleModalFormCancel} />
        </EasyContainer>
    )
}

export default RolePanel
