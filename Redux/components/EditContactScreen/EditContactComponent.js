// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Platform} from 'react-native'

//redux
import EditContainer from '../../containers/Contact/EditContainer'

export default class EditContactComponent extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            ctID: '',
        })
    }
    componentDidMount(): void {
        const getItem = this.props.navigation.getParam('getID', 'default')
        console.log('hàm set ctID chạy nè')
        this.setState({ctID: getItem})
    }

    goBack = () => this.props.navigation.goBack()

    goBackList = () => this.props.navigation.navigate()

    render() {
        return (
            <View style={{flex: 1}}>
                <EditContainer
                    getParamer={this.state.ctID}
                    btnLeft={this.goBack}
                />
            </View>
        )
    }
}
