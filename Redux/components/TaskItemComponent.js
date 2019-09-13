// Copyright (c) 2019-present. Personal. All Rights Reserved.

import React, {Component} from 'react'
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableOpacity,
    RefreshControl, TextInput,
} from 'react-native'

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    onPress={() => {
                    //Call this action in Container
                        this.props.onClickToggle(this.props.taskId)
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                />
                <Text style={{margin: 20, backgroundColor: this.props.completed == true ? '#343CD6' : '#41D628'}}>
                    {this.props.taskName}
                </Text>
            </View>)
    }
}
