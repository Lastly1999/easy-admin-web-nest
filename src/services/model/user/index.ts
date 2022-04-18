import { IGlobalModel } from "../global"

export type IRoleUsersItem = {
    userName: string
    passWord: string
    nikeName: string
    roleId: number | null
    status: boolean
} & IGlobalModel