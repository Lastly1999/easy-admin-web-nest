import { takeEvery,takeLatest } from "redux-saga"

export function* loginAction(){
    yield takeEvery("loginAction",function* (){
        console.log("loginAction")
    })

    yield takeLatest("takeLatest",function* (){
        console.log("takeLatest")
    })

}