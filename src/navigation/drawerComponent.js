// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import {DrawerItems, StackActions, NavigationActions} from 'react-navigation'

export default class DrawerMenu extends Component {
    resetStack = () => {
        // const resetAction = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({routeName: 'Login'})],
        // })
        // this.props.navigation.dispatch(resetAction)

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <View style={style.container}>
                <ImageBackground
                    source={require('../images/backgroud-headerbar.png')}
                    style={[style.Headerbar]}
                >
                    <View>
                        <Image
                            style={style.avatarUserDrawer}
                            source={require('../images/ava4.jpg')}
                        />
                        <Text style={style.emailUserDrawer}> Manhtygt@gmail.com  </Text>
                    </View>
                </ImageBackground>
                <View>
                    <DrawerItems {...this.props}/>
                </View>
                <TouchableOpacity
                    onPress={this.resetStack}
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
