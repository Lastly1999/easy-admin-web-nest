import { takeEvery } from "redux-saga/effects"
import { AuthActionTypes } from "../actions/authActions"
import { fetchLoginAction } from "@/redux/sagas/authSagas"

export function* appSagas() {
    yield takeEvery(AuthActionTypes.FETCH_LOGIN_ACTION, fetchLoginAction)
}

export default appSagas