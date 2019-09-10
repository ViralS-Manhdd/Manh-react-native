// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React from 'react'
import {StyleSheet, View} from 'react-native'
import Main from './Redux/Main'
import {Provider} from 'react-redux'
import store from './Redux/store/store'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Main/>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

// Copyright (c) 2019-present, Personal. All Rights Reserved.

// import React from 'react'
// import AppContainer from './src/navigation/appNavigation'
//
// export default class App extends React.Component {
//     render() {
//         return <AppContainer/>
//     }
// }
//
