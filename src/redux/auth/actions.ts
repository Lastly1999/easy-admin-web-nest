import { SET_TOKEN } from "./constants"
import { IAction } from "./types"

export const setToken = (payload: string): IAction => ({
    type: SET_TOKEN,
    payload
})
