import httpRequest from "@/utils/axios/httpRequest"
import { IRoleListItem } from "@/services/model/role"

// 获取角色列表
export const getSysRoles = () => {
    return httpRequest.get<unknown, { roles: IRoleListItem[] }>("/role/role")
}

// 修改角色启用状态
export const updateSysRoleStatus = () => {
    return httpRequest.get<unknown, { roles: IRoleListItem[] }>("/role/status")
}
