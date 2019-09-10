// Copyright (c) 2019-present, Personal. All Rights Reserved.

import {createStore} from 'redux'
import reducers from '../reducers'

const store = createStore(
    reducers,
    {}
)

export default store
