// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {put, takeLatest, call} from 'redux-saga/effects'
import {FETCH_REQUEST, FETCH_SUCCESS} from '../actions/actionTypes'

function* fetchNews(action) {
    const text = action.text
    console.log('hihihiii')
    const data = yield apiFetch(text)
    yield put({type: FETCH_SUCCESS, json: data})
    console.log('hahaa')
}
export function* watchSendMsg() {
    yield takeLatest(FETCH_REQUEST, fetchNews)
}
function* apiFetch(text) {
    const req = yield fetch(`http://ghuntur.com/simsim.php?lc=en&deviceId=&bad0=&txt=${text}`)
    const res = yield req.text()
    return res.trim()
}
