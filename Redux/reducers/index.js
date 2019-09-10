// Copyright (c) 2019-present, Personal. All Rights Reserved.

import {combineReducers} from 'redux'
import counterReducer from './counterReducer'

export default combineReducers({
    counter: counterReducer,
})
