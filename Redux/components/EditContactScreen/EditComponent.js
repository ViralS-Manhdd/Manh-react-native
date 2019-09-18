// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, ImageBackground} from 'react-native'
import {Button, Header} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'

//redux

export default class EditComponent extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            newUserName: '',
            newUserNumber: '',
        })
    }

    handleEditName = (text2) => {
        this.setState({newUserName: text2})
    }
    handleEditNumber = (text) => {
        this.setState({newUserNumber: text})
    }
    render() {
        const ctID = this.props.getParamer
        console.log('edit', this.props)
        console.log('edit2', ctID)
        return (
            <View style={[style.container]}>
                <ImageBackground
                    style={{width: '100%'}}
                    source={require('../../asset/images/backgroud-headerbar.png')}
                >
                    <Header
                        containerStyle={{
                            backgroundColor: 'transparent',
                            marginTop: -25,
                        }}
                        leftComponent={
                            <MyCustomLeftComponent
                                iconLeft='bars'
                                btnLeft={this.openMenu}
                            />
                        }
                        centerComponent={<MyCustomCenterComponent title={'Edit detail'}/>}

                        //rightComponent={<MyCustomRightComponent/>}
                    />
                </ImageBackground>
                <TextInput
                    style={{
                        height: 60,
                        width: '100%',
                        margin: 10,
                        padding: 10,
                        borderColor: 'white',
                        borderWidth: 1,
                        color: 'black',
                        fontSize: 20,
                    }}
                    keyboardType='default'
                    placeholderTextColor='gray'
                    placeholder='Enter contact name'
                    autoCapitalize='words'
                    onChangeText={this.handleEditName}
                />
                <TextInput
                    style={{
                        height: 60,
                        width: '100%',
                        margin: 10,
                        padding: 10,
                        borderColor: 'white',
                        borderWidth: 1,
                        color: 'black',
                        fontSize: 20,
                    }}
                    keyboardType='default'
                    placeholderTextColor='gray'
                    placeholder='Enter contact number'
                    autoCapitalize='words'
                    onChangeText={this.handleEditNumber}
                />
                <Button
                    title='Edit contact'
                    type='outline'
                    onPress={() => {
                        // if (this.state.newContactName.trim() === '') {
                        //     return
                        // }
                        this.props.onClickAdd(ctID, this.state.newUserName, this.state.newUserNumber)
                        alert('Đã sửa thành công' + ctID + ' và ' + this.state.newUserName + ' và ' + this.state.newUserNumber)
                        this.handleEditName('')
                        this.handleEditNumber('')
                    }}
                />
                <Button
                    title='Drop contact'
                    type='outline'
                    onPress={() => {
                        this.props.onClickDrop(ctID)
                        alert('Đã xóa thành công' + ctID)
                    }}
                />
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
    m_v_15: {
        marginVertical: 15,
    },
    m_l_15: {
        marginLeft: 15,
    },
    m_r_15: {
        marginRight: 15,
    },
})
