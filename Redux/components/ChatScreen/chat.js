// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity, FlatList} from 'react-native'
import {Header, Icon} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'
import MessageBox from './messageBox'
import messageData from './messageData'

export default class ScreenChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            response: '',
            dataList: messageData,
            checkFlag: false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('123', nextProps)
        console.log('123', prevState)

    }

    handleMesesger = (text) => {
        this.setState({message: text})
    }

    goBack = () => this.props.navigation.goBack()

    sendMsg = (sendMessage = '') => {
        this.setState({
            dataList: this.state.dataList.concat([
                {
                    key: Math.random().toString(),
                    message: sendMessage,
                    user: {
                        name: 'Maria',
                        ava: require('../../asset/images/ava2.jpg'),
                        sdt: '0123456709',
                    },
                    status: '.',
                    time: new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1'),
                    type: '2',
                },
            ]),
        })
        console.log('chay xog',this.state.dataList)
        //clear noi dung typeMsg
        this.refs.typeMsg.clear()
    }

    receiverMsg = (dataFetch = '') => {
        this.setState({
            dataList: this.state.dataList.concat([
                {
                    key: Math.random().toString(),
                    message: dataFetch,
                    user: {
                        name: 'Jone Switch',
                        ava: require('../../asset/images/ava5.jpg'),
                        sdt: '0123456709',
                    },
                    status: '.',
                    time: new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1'),
                    type: '1',
                },
            ]),
        })
    }

    loadingBox = () => {
        this.setState({
            dataList: this.state.dataList.concat([
                {
                    key: Math.random().toString(),
                    user: {
                        name: 'Jone Switch',
                        ava: require('../../asset/images/ava5.jpg'),
                        sdt: '0123456709',
                    },
                    status: '.',
                    time: new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1'),
                    type: '3',
                },
            ]),
        })
    }

    render() {
        // console.log('abc', this.props)
        return (
            <View style={[style.container]}>
                <ImageBackground
                    source={require('../../asset/images/backgroud-headerbar.png')}
                    style={[style.Headerbar]}
                >
                    <Header
                        containerStyle={{
                            backgroundColor: 'transparent',
                            marginTop: -25,
                        }}
                        leftComponent={
                            <MyCustomLeftComponent
                                iconLeft='arrow-left'
                                btnLeft={this.goBack}
                            />
                        }
                        centerComponent={<MyCustomCenterComponent title={'Jone Snow'}/>}

                        //rightComponent={<MyCustomRightComponent/>}
                    />
                </ImageBackground>

                <FlatList
                    ref='flatList'
                    style={style.messageList}
                    data={this.state.dataList}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => (
                        <MessageBox
                            item={item}
                        />
                    )}
                    onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
                />

                {/*footer bar*/}

                <View style={[style.horizontal, style.footerArea]} >
                    <TouchableOpacity

                        // onPress={() => this.login(this.state.email, this.state.password)
                        // }
                        style={[style.btnPlusSmile]}
                    >
                        <Icon
                            name='plus'
                            type='font-awesome'
                            color='#ef5f89'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity

                        // onPress={() => this.login(this.state.email, this.state.password)
                        // }
                        style={[style.btnPlusSmile]}
                    >
                        <Image
                            source={require('../../asset/images/smile-icon.png')}
                            style={style.imgSmile}
                        />
                    </TouchableOpacity>

                    {/* Nhập tin nhắn vào đây */}
                    <TextInput
                        ref='typeMsg'
                        style={style.inputMessage}
                        underlineColorAndroid='transparent'
                        placeholder='Type a message'
                        placeholderTextColor='#b8b8b8'
                        autoCapitalize='sentences'
                        onChangeText={this.handleMesesger}
                    />

                    {/*button gửi tin nhắn */}
                    <TouchableOpacity

                        onPress={() => {
                            if (this.state.message.trim() === '') {
                                return
                            }
                            this.sendMsg(this.state.message)
                            // this.props.onClickSend(this.state.message)
                            // this.receiverMsg(this.props.response.res)
                            // this.handleMesesger('')
                        }}
                        style={[style.sendM]}
                    >
                        <ImageBackground
                            source={require('../../asset/images/bgSendMes.png')}
                            style={[style.btnSend]}
                        >
                            <Image
                                style={style.imgSend}
                                source={require('../../asset/images/send-icon.png')}
                            />
                        </ImageBackground>
                    </TouchableOpacity>
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
    messageList: {
        flex: 1,
        backgroundColor: '#f5f7fb',
    },
    btnPlusSmile: {
        alignItems: 'center',
        paddingTop: 14,
        paddingLeft: 15,
    },
    imgSmile: {
        width: 20,
        height: 20,
    },
    inputMessage: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginLeft: 10,
        width: '60%',
    },
    btnSend: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    imgSend: {
        width: 20,
        height: 20,
        marginLeft: 25,
    },
    footerArea: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    borderDefault: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    sendM: {
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        position: 'absolute',
        width: '20%',
        height: '100%',
    },
})

