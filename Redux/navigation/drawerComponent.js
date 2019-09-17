// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import {StackActions, NavigationActions} from 'react-navigation'
import {DrawerNavigatorItems} from "react-navigation-drawer";
import ModalLogout from './modalLogout'

export default class DrawerMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    }

    resetStack = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View style={style.container}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        // eslint-disable-next-line no-undef
                        Alert.alert('Modal has been closed.')
                    }}
                >
                    <ModalLogout
                        unvisible={this.setModalVisible}
                        resetStack={this.resetStack}
                    />
                </Modal>

                <ImageBackground
                    source={require('../asset/images/backgroud-headerbar.png')}
                    style={[style.Headerbar]}
                >
                    <View>
                        <Image
                            style={style.avatarUserDrawer}
                            source={require('../asset/images/ava4.jpg')}
                        />
                        <Text style={style.emailUserDrawer}> Manhtygt@gmail.com  </Text>
                    </View>
                </ImageBackground>
                {/*Item goc của drawer*/}
                <View>
                    <DrawerNavigatorItems {...this.props}/>
                </View>
                {/*<TouchableOpacity*/}
                {/*    onPress={this.resetStack}*/}
                {/*>*/}
                {/*    <Text style={style.btnLogout}>Logout</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true)
                    }}
                >
                    <Text style={style.btnLogout}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    horizontal: {
        flexDirection: 'row',
    },
    Headerbar: {
        height: '30%',
    },
    btnLogout: {
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 6,
    },
    avatarUserDrawer: {
        borderRadius: 999,
        width: 100,
        height: 100,
        margin: 15,
    },
    emailUserDrawer: {
        marginTop: 10,
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
})
