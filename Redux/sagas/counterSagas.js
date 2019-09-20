// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {INCREMENT, DECREMENT} from '../actions/actionTypes'

//Saga effects
import {delay} from 'redux-saga'
import {put, takeEvery} from 'redux-saga/effects'

export function* sayHello() {
    console.log('Hello world My name is Manh !')
}

function* increment() {
    console.log('This is increment saga')
}

function* decrement() {
    console.log('This is decrement saga')
}

export function* watchDecrement() {
    //yield put({ type: INCREMENT, step: step });
    console.log('watchDecrement saga')
    yield takeEvery(DECREMENT, decrement)
}
export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}
