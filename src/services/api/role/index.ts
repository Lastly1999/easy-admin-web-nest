import httpRequest from "@/utils/axios/httpRequest"

export const getSysRoles = () => {
    return httpRequest.get("/role/role")
}

export const getSystemRoleMenus = () => {
    return httpRequest.get<any>("/auth/menu")
}