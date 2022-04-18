import EasyContainer from "@/components/EasyContainer/EasyContainer"
import React from "react"
import RolePanelQuery from "./components/RolePanelQuery/RolePanelQuery"
import RoleTable from "./components/RoleTable/RoleTable"

interface Props { }

const RolePanel: React.FC = ({ }: Props) => {
    return (
        <EasyContainer>
            <RolePanelQuery></RolePanelQuery>
            <RoleTable></RoleTable>
        </EasyContainer>
    )
}

export default RolePanel
