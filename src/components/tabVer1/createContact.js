// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, TextInput, Image} from 'react-native'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'
import {Button, Header, Icon} from 'react-native-elements'

export default class CreateContact extends Component {
    constructor(props) {
        super(props)
        this.state = {text: 'Useless Placeholder'}
    }

    openMenu = () => {
        this.props.navigation.toggleDrawer()
    };

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state
        const tabBarLabel = 'Create'
        const tabBarIcon = () => (
            <Image
                source={require('./../../TabDrawerViblo/imagesViblo/wallet.png')}
                style={{width: 26, height: 26, tintColor: '#007256'}}
            />
        )
        return {tabBarLabel, tabBarIcon}
    }

    render() {
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        marginTop: -25,
                    }}
                    leftComponent={
                        <MyCustomLeftComponent
                            iconLeft='bars'
                            btnLeft={this.openMenu}
                        />
                    }
                    centerComponent={<MyCustomCenterComponent title={'Login1'}/>}

                    //rightComponent={<MyCustomRightComponent/>}
                />
                <Text>Nhập Tên</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    title='Tab 1'
                    onpress={this.props.navigation.navigate('Contact')}
                />
            </View>
        )
    }
}
