// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {combineReducers} from 'redux'
import taskReducers from './taskReducers'
import contactReducers from './contactReducers'
import counterReducers from './counterReducers'
import chatReducer from './chatReducers'

const allReducers = combineReducers({
    taskReducers,
    contactReducers,
    counterReducers,
    chatReducer,

    //you can add more reducers here, separated by , !
})
export default allReducers
