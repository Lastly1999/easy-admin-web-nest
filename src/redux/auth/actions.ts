import { SET_SYSTEM_MENUS, SET_TOKEN } from "./constants"

export const setToken = (payload: string): ReturnType<any> => ({
    type: SET_TOKEN,
    payload
})

export const setSysMenus = (payload:any):ReturnType<any> => ({
    type:SET_SYSTEM_MENUS,
    payload
})
