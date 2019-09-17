// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import styles from '../../asset/stylesheet/styles'
import iPhone from '../../asset/images/phone-call.png'
import iMail from '../../asset/images/mail.png'
import {Button, Header} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'

export default class DetalContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemData: {},
        }
    }

    goChat = () => this.props.navigation.navigate('Chat1')

    componentDidMount(): void {
        const getItem = this.props.navigation.getParam('getItem', 'default')
        this.setState({itemData: getItem})
    }

    goBack = () => this.props.navigation.goBack()

    render() {
        const {itemData} = this.state
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../asset/images/backgroud-headerbar.png')}
                    style={{width: '100%'}}
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
                        centerComponent={<MyCustomCenterComponent title={'Detail'}/>}

                        //rightComponent={<MyCustomRightComponent/>}
                    />
                </ImageBackground>
                <View style={[styles.title_detal_contact, styles.flexDirRow]}>
                    <Image
                        style={[styles.avatar_detail]}
                        source={{uri: itemData.ava}}
                    />
                    {/*<Text style={[styles.name_contact_detail]}>Jon Snow</Text>*/}
                    <Text style={[styles.name_contact_detail]}>{this.state.itemData.name}</Text>
                </View>
                <View style={styles.content_detal_contact}>
                    <View style={[styles.number_phone, styles.flexDirRow]}>
                        <View style={[styles.floatLeft]}>
                            <Image
                                style={{width: 50, height: 50}}
                                source={iPhone}
                            />
                        </View>
                        <View style={[styles.floatRight]}>
                            <View style={[styles.cpn_number, styles.flexDirRow]}>
                                <View style={[]}>
                                    {/*<Text style={[styles.number]}>(123)-123-2445234</Text>*/}
                                    <Text style={[styles.number]}>{itemData.sdt}</Text>
                                    {/*<Text style={[styles.ct]}>Mobile</Text>*/}
                                    <Text style={[styles.ct]}>{itemData.ct}</Text>
                                </View>
                                <Button
                                    title='Chat'
                                    type='outline'
                                    onPress={this.goChat}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.email_contact, styles.flexDirRow]}>
                        <View style={[styles.floatLeft]}>
                            <Image
                                style={{width: 50, height: 50}}
                                source={iMail}
                            />
                        </View>
                        <View style={[styles.floatRight]}>
                            <View style={[styles.cpn_email, styles.flexDirRow]}>
                                <View style={[]}>
                                    <Text style={[styles.number]}>jonesoenahfhe@gmail.com</Text>
                                    <Text style={[styles.ct]}>Mobile</Text>
                                </View>
                            </View>
                            <View style={[styles.cpn_email, styles.flexDirRow]}>
                                <View style={[]}>
                                    <Text style={[styles.number]}>jonesoenahfhe@gmail.com</Text>
                                    <Text style={[styles.ct]}>Mobile</Text>
                                </View>
                            </View>
                            <View style={[styles.cpn_email, styles.flexDirRow]}>
                                <View style={[]}>
                                    <Text style={[styles.number]}>jonesoenahfhe@gmail.com</Text>
                                    <Text style={[styles.ct]}>Mobile</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
