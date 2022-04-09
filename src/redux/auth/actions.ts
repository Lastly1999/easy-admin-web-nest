import { Dispatch } from "react"
import { setAuthMenus } from "./actionsCreators"
import { getSystemRoleMenus } from "@/services/api/role"

export type ISystemMenus = {
    title: string
    key: string
}

export async function feachSystemMenus(dispatch: Dispatch<any>) {
    const result = await getSystemRoleMenus()
    dispatch(setAuthMenus(result.data))
}