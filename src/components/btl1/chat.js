// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, StyleSheet, ImageBackground, TextInput, Image, TouchableOpacity, FlatList} from 'react-native'
import {Header, Icon} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from './../../components/layout/header'
import MessageBox from '../Day4/messageBox'
import messageData from './../btl1/messageData'
import awaitAsyncGenerator from '@babel/runtime/helpers/esm/awaitAsyncGenerator'

export default class ScreenLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            dataList: messageData,
        }
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
                        ava: require('./../../images/ava2.jpg'),
                        sdt: '0123456709',
                    },
                    status: '.',
                    time: '4:37 AM',
                    type: '2',
                },
            ]),
        })

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
                        ava: require('./../../images/ava5.jpg'),
                        sdt: '0123456709',
                    },
                    status: '.',
                    time: '4:37 AM',
                    type: '1',
                },
            ]),
        })
    }

    sendMessage = async () => {
        const msg = await this.state.message
        let responseJson = ''

        // console.log(this.state.dataList, message)
        this.sendMsg(msg)

        console.log('nhan tin nhan', this.state.dataList)

        console.log(msg)
        try {
            const response = await fetch(
                `http://ghuntur.com/simsim.php?lc=en&deviceId=&bad0=&txt=${msg}`
            )
            console.log(response)
            responseJson = await response.text()
        } catch (error) {
            console.error(error)
        }

        this.receiverMsg(responseJson)

        console.log('ket thuc ham')
    }

    render() {
        // console.log('abc', this.props)
        return (
            <View style={[style.container]}>
                <ImageBackground
                    source={require('./../../images/backgroud-headerbar.png')}
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
                            source={require('./../../images/smile-icon.png')}
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
                            this.sendMessage()
                        }}
                        style={[style.sendM]}
                    >
                        <ImageBackground
                            source={require('./../../images/bgSendMes.png')}
                            style={[style.btnSend]}
                        >
                            <Image
                                style={style.imgSend}
                                source={require('./../../images/send-icon.png')}
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

