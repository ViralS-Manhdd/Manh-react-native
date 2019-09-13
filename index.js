// Copyright (c) 2019-present. Personal. All Rights Reserved.

import React, {Component} from 'react'
import {AppRegistry} from 'react-native'

//Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import allReducers from './Redux/reducers'
import TaskManagerComponent from './Redux/components/TaskManagerComponent'

const store = createStore(allReducers)
const App = () => (
    <Provider store={store}>
        <TaskManagerComponent/>
    </Provider>
)

AppRegistry.registerComponent('AwesomeProject', () => App)
