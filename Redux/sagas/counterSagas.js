// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {INCREMENT, DECREMENT} from '../actions/actionTypes'

//Saga effects
//import {delay} from 'redux-saga'
import {put, takeEvery, call} from 'redux-saga/effects'

export function* sayHello() {
    console.log('Hello world My name is Manh !')
}

export function* watchDecrement() {
    //yield put({ type: INCREMENT, step: step });
    console.log('watchDecrement saga')
    yield takeEvery(DECREMENT, decrement)
}
function* decrement() {
    console.log('This is decrement saga1')
    console.log('This is decrement saga2')
    console.log('This is decrement saga3')
    console.log('This is decrement saga4')
    console.log('This is decrement saga5')
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment)
}
function* increment() {
    console.log('This is increment saga')
}
