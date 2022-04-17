import { IGlobalModel } from "../global"

export type ILoginForm = {
    userName: string
    passWord: string
    codeAuth: string
    code: string
}

export type ILoginInfo = {
    token: string
}

export type IGraphicCodeInfo = {
    codeBase: string
    code: string
}

export type IRolesSystemMenus = {
    label: string
    path: string
    pId: number | null
    icon: string | null
} & IGlobalModel