// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {FETCH_SUCCESS, FETCH_REQUEST} from './../actions/actionTypes'

const chatReducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_REQUEST:
        return {...state}
    case FETCH_SUCCESS:
        return {...state, res: action.json}
    default:
        return state
    }
}
export default chatReducer
