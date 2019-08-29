// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from '../styles'
import {Header} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'

export default class CreateContactNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {text: 'Useless Placeholder'}
    }

    openMenu = () => {
        this.props.navigation.toggleDrawer()
    };

    render() {
        return (
            <View style={styles.container}>
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
                    centerComponent={<MyCustomCenterComponent title={'Login2'}/>}

                    //rightComponent={<MyCustomRightComponent/>}
                />
                <Text>Nhập số điện thoại</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}
