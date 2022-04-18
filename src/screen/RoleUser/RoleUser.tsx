import React from 'react'

// global components
import EasyContainer from "@/components/EasyContainer/EasyContainer"

// components
import RoleUserTable from './components/RoleUserTable/RoleUserTable'

const RoleUser: React.FC = () => {
    return (
        <EasyContainer>
            <RoleUserTable></RoleUserTable>
        </EasyContainer>
    )
}

export default RoleUser