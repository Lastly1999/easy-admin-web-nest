import { takeEvery } from "redux-saga/effects"

export function* defSages(){
    yield takeEvery("FUCK_REDUX",function* (){
        console.log('FUCK_REDUX')
    })
}