// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {delay} from 'redux-saga'

import {all} from 'redux-saga/effects'
import {sayHello, watchIncrement, watchDecrement} from './counterSagas'

export default function* rootSaga() {
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement(),
    ])
}
