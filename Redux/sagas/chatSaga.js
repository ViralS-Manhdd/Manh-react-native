// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {put, takeLatest, call} from 'redux-saga/effects'
import {FETCH_REQUEST} from '../actions/actionTypes'
import {newsReceived} from '../actions'

export function* watchSendMsg() {
    yield takeLatest(FETCH_REQUEST, fetchNews)
}

function* fetchNews(action) {
    const {text} = action
    console.log('=====')
    const data = yield call(apiFetch, text)
    yield put(newsReceived(data))
    console.log('======  END   ========')
}

function* apiFetch(text) {
    const req = yield fetch(`http://ghuntur.com/simsim.php?lc=en&deviceId=&bad0=&txt=${text}`)
    const res = yield req.text()
    return res.trim()
}
