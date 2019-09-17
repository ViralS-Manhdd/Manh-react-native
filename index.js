// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {AppRegistry} from 'react-native'

//Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import allReducers from './Redux/reducers'
import AppContainer from './Redux/navigation/appNavigation'

const store = createStore(allReducers)
const App = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)

AppRegistry.registerComponent('AwesomeProject', () => App)
