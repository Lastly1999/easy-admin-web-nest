import { GET_AUTH_MENUS, SET_TOKEN } from "./constants"
import { IAction } from "./types"
import { getSysRoles } from "@/services/api/role"

export const setToken = (payload: string): IAction => ({
    type: SET_TOKEN,
    payload
})

export const getAuthMenus = async () => {
    const result = await getSysRoles()
    console.log(result)
    return {
        type: GET_AUTH_MENUS,
        payload: result.data
    }
}
