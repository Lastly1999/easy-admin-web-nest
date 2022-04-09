import { SET_AUTH_MENUS, SET_TOKEN } from "./constants"
import { IAction } from "./types"

export const setToken = (payload: string): IAction => ({
    type: SET_TOKEN,
    payload
})

export const setAuthMenus = (payload: any) => ({
    type: SET_AUTH_MENUS,
    payload
})
