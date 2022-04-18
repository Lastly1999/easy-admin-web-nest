import { takeEvery } from "redux-saga/effects"
import { AuthActionTypes } from "@/redux/actions/authActions"
import { fetchLoginAction, fetchSystemRoleMenus, fetchSystemSetingsIcons } from "@/redux/sagas/authSagas"
import { SystemActionTypes } from "./actions/systemActions"

// app sagas 收集注册
export function* appSagas() {
    yield takeEvery(AuthActionTypes.FETCH_LOGIN_ACTION, fetchLoginAction)
    yield takeEvery(AuthActionTypes.FETCH_SYSTEM_MENUS, fetchSystemRoleMenus)
    yield takeEvery(SystemActionTypes.FETCH_SYSTEM_ICONS,fetchSystemSetingsIcons)
}

export default appSagas