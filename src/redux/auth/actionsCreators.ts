import { ThunkAction } from "redux-thunk"
import { getSysRoles } from "@/services/api/role"
import { setSysMenus } from "./actions"

export const feachSystemMenus: ThunkAction<Promise<any>, any, any, any> = async (dispatch) => {
    const result = await getSysRoles()
    dispatch(setSysMenus(result.data))
}
