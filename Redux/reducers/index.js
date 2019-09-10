// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {combineReducers} from 'redux'
import taskReducers from './taskReducers'

const allReducers = combineReducers({
    taskReducers,

    //you can add more reducers here, separated by , !
})
export default allReducers
