import { ISystemSetingIcons } from "@/services/model/system"
import { createAction } from "redux-actions"

export const SystemActionTypes = {
    FETCH_SYSTEM_ICONS: "FETCH_SYSTEM_ICONS",
    SET_SYSTEM_ICONS: "SET_SYSTEM_ICONS"
}

// 请求系统图标设置
export const fetchSystemIcons = createAction(SystemActionTypes.FETCH_SYSTEM_ICONS)

// 设置系统图标设置
export const setSystemIcons = createAction(SystemActionTypes.SET_SYSTEM_ICONS, (icons: ISystemSetingIcons[]) => ({ icons }))