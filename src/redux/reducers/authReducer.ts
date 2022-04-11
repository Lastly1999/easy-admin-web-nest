export type IAuthState = {
    token: string | null
}

const authState: IAuthState = {
    token: null
}

const authReducer = (state = authState, actions: any) => {
    return state
}

export default authReducer