export type IAuthState = {
    token: string | null
}

export type IAction = {
    type: string
    [index: string]: any
}
