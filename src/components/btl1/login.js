// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity, Modal} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {Text, Button} from 'react-native-elements'
import iconKey from './../../images/key-icon.png'
import ModalTest from "../btl2/modal";

export default class ScreenLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            modalVisible: false,
        }
    }

    //gán giá trị của email và pass cho state hiện tại
    handleEmail = (text) => {
        this.setState({email: text})
    }
    handlePassword = (text) => {
        this.setState({password: text})
    }

    //sử dụng asyncStorage để lưu giá trị email và pass
    storageUser = () => {
        AsyncStorage.setItem('email', this.state.email)
        AsyncStorage.setItem('pass', this.state.password)
    }

    getUser = async () => {
        const email = await AsyncStorage.getItem('email')
        const password = await AsyncStorage.getItem('pass')
        await this.setState({email, password})
    }

    login = (email, pass) => {
        // eslint-disable-next-line no-alert
        alert('email: ' + email + ' password: ' + pass)
    }

    btnLogin = () => {
        this.storageUser()
        this.props.navigation.navigate('Chat1')
    };

    btnSignup = () => {
        this.props.navigation.navigate('Create')
    };

    componentDidMount() {
        this.getUser()
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    render() {
        return (
            <View style={[style.container]}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                    }}
                >
                    <ModalTest
                        visible={this.setModalVisible}
                    />
                </Modal>

                <ImageBackground
                    source={require('./../../images/backgroud-login.png')}
                    style={[style.NameProject]}
                >
                    <Text style={style.titleLogin}>Chat demo</Text>
                </ImageBackground>
                <View style={[style.loginMain]}>
                    <View style={[style.horizontal, style.textInput]}>
                        <Image
                            source={require('./../../images/id-icon.png')}
                            style={style.iconInput}
                        />
                        <TextInput
                            style={style.inputEmail}
                            underlineColorAndroid='transparent'
                            placeholder='Email'
                            placeholderTextColor='#b8b8b8'
                            autoCapitalize='none'
                            onChangeText={this.handleEmail}
                            value={this.state.email}
                        />
                    </View>
                    <View style={[style.horizontal, style.textInput]}>
                        <Image
                            source={iconKey}
                            style={style.iconInput}
                        />
                        <TextInput
                            style={style.inputPass}
                            underlineColorAndroid='transparent'
                            placeholder='Password'
                            secureTextEntry={true}
                            placeholderTextColor='#b8b8b8'
                            autoCapitalize='none'
                            onChangeText={this.handlePassword}
                            value={this.state.password}
                        />
                    </View>
                    {/*Buton login --------------------------------------------  */}
                    <TouchableOpacity
                        style={[style.btnLogIn]}
                        onPress={this.btnLogin}
                    >
                        <Text style={style.textLogin}>Login</Text>
                    </TouchableOpacity>
                    {/*Button quen mat khau ------------------------------------  */}
                    <TouchableOpacity
                        onPress={() => this.login(this.state.email, this.state.password)
                        }
                        style={[style.btnPass]}
                    >
                        <Text style={style.textFP}>forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={[style.horizontal, style.footerLogin]}>

                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Text style={{paddingTop: 5}}>Don't have an account?</Text>
                    <Button
                        onPres={this.btnSignup}
                        title='Sign up'
                        type='clear'
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                        buttonStyle={style.btnSignUp}
                    />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    horizontal: {
        flexDirection: 'row',
    },
    m_v_10: {
        marginVertical: 10,
    },
    NameProject: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleLogin: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold',
    },
    loginMain: {
        backgroundColor: 'transparent',
        paddingHorizontal: 40,
    },
    inputEmail: {
        height: 40,
        width: '80%',
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    inputPass: {
        height: 40,
        width: '80%',
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    btnSignUp: {
        backgroundColor: 'transparent',
        padding: 0,
        marginLeft: 5,
    },
    btnLogIn: {
        marginVertical: 10,
        backgroundColor: '#cb5d9a',
        borderRadius: 999,
        alignItems: 'center',
    },
    textLogin: {
        color: '#fff',
        marginVertical: 15,
        fontSize: 20,
    },
    btnPass: {
        alignItems: 'center',
        marginVertical: 10,
    },
    textFP: {
        textTransform: 'uppercase',
        color: '#d405d0',
    },
    textInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        borderRadius: 999,
        marginVertical: 15,
        padding: 10,
    },
    iconInput: {
        marginTop: 12,
        margin: 10,
        width: 15,
        height: 15,
    },
    footerLogin: {
        justifyContent: 'center',
        marginBottom: 15,
    },
})

