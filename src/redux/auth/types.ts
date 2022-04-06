export type IAuthState = {
    token: string | null
    authMenus: Array<any>
}

export type IAction = {
    type: string
    [index: string]: any
}
