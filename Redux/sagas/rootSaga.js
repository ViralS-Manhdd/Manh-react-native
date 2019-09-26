// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
//saga effects
// import {delay} from 'redux-saga'
import {all} from 'redux-saga/effects'
import {sayHello, watchIncrement, watchDecrement} from './counterSagas'
import {watchSendMsg} from './chatSaga'

export default function* rootSaga() {
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement(),
        watchSendMsg(),
    ])
}
