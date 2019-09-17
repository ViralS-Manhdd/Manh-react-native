// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, ImageBackground} from 'react-native'
import {Button, Header} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'

//redux
import AddContactContainer from "../../containers/Contact/AddContactContainer";

export default class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            newContactName: '',
        })
    }

    handleAddContact = (text) => {
        this.setState({newContactName: text})
    }

    render() {
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
                        centerComponent={<MyCustomCenterComponent title={'Thêm'}/>}

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
                        fontSize: 30,
                    }}
                    keyboardType='default'
                    placeholderTextColor='gray'
                    placeholder='Enter contact name'
                    autoCapitalize='words'
                    onChangeText={this.handleAddContact}
                />
                <Button
                    title='Add contact'
                    type='outline'
                    onPress={() => {
                        if (this.state.newContactName.trim() === '') {
                            return
                        }
                        this.props.onClickAdd(this.state.newContactName)
                        this.handleAddContact('')
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
