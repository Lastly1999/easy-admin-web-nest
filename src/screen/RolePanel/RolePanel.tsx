import React, { useState } from "react"
import EasyContainer from "@/components/EasyContainer/EasyContainer"
// components
import RolePanelQuery from "./components/RolePanelQuery/RolePanelQuery"
import RoleTable from "./components/RoleTable/RoleTable"
import RoleModalForm from "./components/RoleModalForm/RoleModalForm"

interface IRolePanelProps { }

const RolePanel: React.FC<IRolePanelProps> = () => {

    const [roleModalVisibile, setRoleModalVisibile] = useState<boolean>(false)

    const [roleModalTitle, setRoleModalTitle] = useState<string>("编辑")

    const roleModalFormSubmit = () => {
        setRoleModalVisibile(false)
    }

    const roleModalFormCancel = () => {
        setRoleModalVisibile(false)
    }

    const addUserHandler = () => {
        setCacheRoleId(undefined)
        setRoleModalTitle("新增")
        setRoleModalVisibile(true)
    }

    const [cacheRoleId, setCacheRoleId] = useState<number>()

    const roleTableEdit = (roleId: number) => {
        setCacheRoleId(roleId)
        setRoleModalVisibile(true)
    }

    return (
        <EasyContainer>
            <RolePanelQuery addUser={addUserHandler}></RolePanelQuery>
            <RoleTable rowEdit={roleTableEdit}></RoleTable>
            <RoleModalForm title={roleModalTitle} visible={roleModalVisibile} roleId={cacheRoleId} onOK={roleModalFormSubmit} onCancel={roleModalFormCancel} />
        </EasyContainer>
    )
}

export default RolePanel
