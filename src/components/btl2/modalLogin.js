// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

// import {Button, Icon} from 'react-native-elements'

export default class ModalLogin extends Component {
    closeModal = () => this.props.unvisible(false)
    render() {
        return (
            <View style={[style.container, style.center2]}>
                <View style={[style.modal, style.center2]}>
                    <Image
                        source={require('./../../images/welcome.png')}
                        style={{width: 120, height: 120}}
                    />
                    <Text style={style.textWelcome}>Welcome to PayLah!</Text>
                    <Text style={style.textCenter}>Here`s a quick orverview to get you started</Text>
                    <TouchableOpacity
                        style={[style.btn_letgo,style.center2]}
                    >
                        <Text style={style.textLetgo}>Let`s go</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[style.btn_skip, style.center2]}
                        onPress={this.closeModal}
                    >
                        <Text style={style.textSkip}>Skip</Text>
                    </TouchableOpacity>
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
    },
    textCenter: {
        textAlign: 'center',
    },
    btn_letgo: {
        marginTop: 30,
        backgroundColor: '#fb5a74',
        borderRadius: 8,
        height: 50,
        width: '100%',
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
        marginTop: 5,
        width: '100%',
        height: 50,
        backgroundColor: 'transparent',
    },
})
