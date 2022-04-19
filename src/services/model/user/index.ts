import { IGlobalModel } from "../global"

export type IUserRoleItem = {
    describe: string
    roleId: number
    roleName: string
    status: boolean
} & IGlobalModel

export type IRoleUsersItem = {
    role: IUserRoleItem[]
    userName: string
    passWord: string
    nikeName: string
    roleId: number | null
    status: boolean
} & IGlobalModel