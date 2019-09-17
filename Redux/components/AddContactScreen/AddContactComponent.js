// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Platform} from 'react-native'

//redux
import AddContactContainer from '../../containers/Contact/AddContactContainer'

export default class AddContactComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <AddContactContainer/>
            </View>
        )
    }
}
