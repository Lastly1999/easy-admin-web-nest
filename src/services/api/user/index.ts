import { IGlobalQueryModel } from "@/services/model/global"
import { IRoleUsersItem } from "@/services/model/user"
import httpRequest from "@/utils/axios/httpRequest"


export type IGetSystemRoleUsersResponse = {
    total: number
    users: IRoleUsersItem[]
}

// 获取系统用户(全部用户)
export const getSystemAllRoleUsers = (data: IGlobalQueryModel) => {
    return httpRequest.post<IGlobalQueryModel, IGetSystemRoleUsersResponse>("/user/user", data)
}