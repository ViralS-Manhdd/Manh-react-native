// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

// import {Button, Icon} from 'react-native-elements'

export default class ModalLogout extends Component {
    closeModal = () => this.props.unvisible(false)

    logout = () => this.props.resetStack()

    render() {
        return (
            <View style={[style.container, style.center2]}>
                <View style={[style.modal, style.center2]}>
                    <Image
                        source={require('../asset/images/sunrise.png')}
                        style={{width: 120, height: 120}}
                    />
                    <Text style={style.textWelcome}>Thanks for you visit</Text>
                    <Text style={style.textCenter}>We hope to see you again soon !</Text>
                    <View style={[style.horizontal]}>
                        <TouchableOpacity
                            style={[style.btn_letgo, style.center2]}
                            onPress={this.logout}
                        >
                            <Text style={style.textLetgo}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[style.btn_skip, style.center2]}
                            onPress={this.closeModal}
                        >
                            <Text style={style.textSkip}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000009e',
    },
    center2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal: {
        flexDirection: 'row',
    },
    m_v_10: {
        marginVertical: 10,
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 35,
        paddingVertical: 5,
        width: '80%',
    },
    textWelcome: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 8,
    },
    textCenter: {
        textAlign: 'center',
    },
    btn_letgo: {
        marginVertical: 15,
        backgroundColor: '#fb5a74',
        borderRadius: 8,
        height: 50,
        width: '50%',
    },
    textLetgo: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
    },
    textSkip: {
        textTransform: 'uppercase',
        color: '#fb5a74',
        fontWeight: 'bold',
    },
    btn_skip: {
        marginVertical: 15,
        width: '50%',
        height: 50,
        backgroundColor: 'transparent',
    },
})
