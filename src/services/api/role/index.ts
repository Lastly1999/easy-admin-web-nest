import httpRequest from "@/utils/axios/httpRequest"
import { IRoleListItem } from "@/services/model/role"

// 获取角色列表
export const getSysRoles = () => {
    return httpRequest.get<unknown, { roles: IRoleListItem[] }>("/role/role")
}

// 修改角色启用状态
export const updateSysRoleStatus = (roleId: number, status: 1 | 0) => {
    return httpRequest.patch<null, null>(`/role/status/${roleId}/${status}`)
}
