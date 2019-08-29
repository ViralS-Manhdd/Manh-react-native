// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

// import {Button, Icon} from 'react-native-elements'

export default class ModalTest extends Component {
    render() {
        return (
            <View style={{marginTop: 22}}>
                <View>
                    <Text>Hello World!</Text>
                    <Text>Hello World!</Text>
                    <Text>Hello World!</Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}
                    >
                        <Text>Hide Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

// const style = StyleSheet.create({
//     infoUser: {
//         flex: 6,
//         flexDirection: 'column',
//         marginTop: 5,
//     },
//     name: {
//         paddingTop: 5,
//         fontWeight: 'bold',
//     },
//     p_r_10: {
//         paddingRight: 10,
//     },
//     btnDetail: {
//         flex: 3,
//         flexDirection: 'column',
//     },
// })
