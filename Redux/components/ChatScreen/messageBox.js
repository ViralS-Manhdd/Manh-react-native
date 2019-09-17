// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native'

// eslint-disable-next-line react/require-optimization
export default class MessageBox extends Component {
    render() {
        // const item = this.props.item;
        const {item} = this.props
        if (item.type === '3') {
            return (
                <View style={[style.m_v_15, style.container, style.horizontal]}>
                    <View style={[style.avatarUser, style.m_l_15]}>
                        <Image
                            style={style.imgAvatar}
                            source={item.user.ava}
                        />
                    </View>
                    <View style={[style.messageBox]}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={[style.topMessageBox]}
                                source={require('../../asset/images/topMessageBox.png')}
                            />
                            <View style={[style.boxShadowS]}>
                                <View style={[style.contentMessageBox]}>
                                    <ActivityIndicator
                                        size='small'
                                        color='#00ff00'
                                    />
                                </View>
                                <View style={[style.bottomMessageBox, style.horizontal]}>
                                    <Text>{item.time}</Text>
                                    <Text>{item.status}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        } else if (item.type === '1') {
            return (
                <View style={[style.m_v_15, style.container, style.horizontal]}>
                    <View style={[style.avatarUser, style.m_l_15]}>
                        <Image
                            style={style.imgAvatar}
                            source={item.user.ava}
                        />
                    </View>
                    <View style={[style.messageBox]}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                style={[style.topMessageBox]}
                                source={require('../../asset/images/topMessageBox.png')}
                            />
                            <View style={[style.boxShadowS]}>
                                <View style={[style.contentMessageBox]}>
                                    <Text>{item.message}</Text>
                                </View>
                                <View style={[style.bottomMessageBox, style.horizontal]}>
                                    <Text>{item.time}</Text>
                                    <Text>{item.status}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        return (
            <View style={[style.container, style.m_v_15, style.rehorizontal]}>
                <View style={[style.avatarUser, style.m_r_15]}>
                    <Image
                        style={style.imgAvatar}
                        source={item.user.ava}
                    />
                </View>
                <View style={[style.messageBox, style.rehorizontal]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={[style.topMessageBoxR]}
                            source={require('../../asset/images/topMessageBoxR.png')}
                        />
                        <View style={[style.boxShadowS]}>
                            <View style={[style.contentMessageBoxR]}>
                                <Text style={{color: '#fff'}}>{item.message}</Text>
                            </View>
                            <View style={[style.bottomMessageBoxR, style.horizontal]}>
                                <Text style={{color: '#fff'}}>{item.time}</Text>
                                <Text style={{color: '#fff'}}>{item.status}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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
    rehorizontal: {
        flexDirection: 'row-reverse',
    },
    avatarUser: {
        width: 70,
        height: 70,
        backgroundColor: 'transparent',
    },
    imgAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
        borderWidth: 3,
        borderColor: '#fff',
    },
    messageBox: {
        width: '60%',
    },
    topMessageBox: {
        top: -2,
        left: 0,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
    },
    contentMessageBox: {
        paddingTop: 10,
        marginLeft: 30,
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        paddingHorizontal: 15,
    },
    bottomMessageBox: {
        backgroundColor: '#fff',
        marginLeft: 30,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 15,
        paddingTop: 5,
        paddingBottom: 15,
    },
    topMessageBoxR: {
        top: -1,
        right: 0,
        height: 40,
        resizeMode: 'contain',
        position: 'absolute',
    },
    contentMessageBoxR: {
        paddingTop: 10,
        marginRight: 25,
        minHeight: 20,
        backgroundColor: '#24b8ba',
        borderTopLeftRadius: 10,
        paddingHorizontal: 15,
    },
    bottomMessageBoxR: {
        backgroundColor: '#24b8ba',
        marginRight: 25,
        marginTop: -1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 5,
    },
    boxShadowS: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
})
