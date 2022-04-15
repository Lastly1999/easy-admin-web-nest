import EasyContainer from "@/components/EasyContainer/EasyContainer"
import React from "react"
import RolePanelQuery from "./components/RolePanelQuery/RolePanelQuery"
import RoleTable from "./components/RoleTable/RoleTable"

interface Props { }

const RolePanel: React.FC = ({ }: Props) => {
    return (
        <EasyContainer>
            <div>
                <RolePanelQuery></RolePanelQuery>
                <RoleTable></RoleTable>
            </div>
        </EasyContainer>
    )
}

export default RolePanel
