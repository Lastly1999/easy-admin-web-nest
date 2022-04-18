import { ISystemSetingIcons } from "@/services/model/system"
import { handleActions as createReducers } from "redux-actions"
import { SystemActionTypes } from "../actions/systemActions"
import { IAction } from "../types"


export type ISystemActionPayload = {
    icons: []
}

export type ISystemState = {
    sysIcons: ISystemSetingIcons[] | null
}

export const systemState: ISystemState = {
    sysIcons: null
}


export default createReducers({
    [SystemActionTypes.SET_SYSTEM_ICONS]: (state, payload: IAction<ISystemActionPayload>) => ({
        ...state,
        sysIcons: payload.payload.icons
    })
}, systemState)