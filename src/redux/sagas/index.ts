import {takeEvery} from "redux-saga/effects"
import { FETCH_LOGIN_ACTION } from "@/redux/actionTypes/authActionTypes"
import { fetchLoginAction } from "@/redux/sagas/authSagas"

export function* appSagas(){
    yield takeEvery(FETCH_LOGIN_ACTION,fetchLoginAction)
}

export default appSagas