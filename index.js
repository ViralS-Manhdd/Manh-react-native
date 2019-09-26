// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import AppContainer from './Redux/navigation/appNavigation'

//Redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './Redux/reducers'
import {createLogger} from 'redux-logger/src'

//Redux Saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Redux/sagas/rootSaga'

const logger = createLogger({

    // ...options
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    allReducers,
    applyMiddleware(logger, sagaMiddleware)
)

// const action = (type) => store.dispatch({type})

const App = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)

sagaMiddleware.run(rootSaga)
AppRegistry.registerComponent('AwesomeProject', () => App)
