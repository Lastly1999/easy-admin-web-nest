import { takeEvery } from "redux-saga/effects"
import { AuthActionTypes } from "../actions/authActions"
import { fetchLoginAction,fetchSystemRoleMenus } from "@/redux/sagas/authSagas"

export function* appSagas() {
    yield takeEvery(AuthActionTypes.FETCH_LOGIN_ACTION, fetchLoginAction)
    yield takeEvery(AuthActionTypes.FETCH_SYSTEM_MENUS, fetchSystemRoleMenus)
}

export default appSagas