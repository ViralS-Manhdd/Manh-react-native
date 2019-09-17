// Copyright (c) 2019-present. Personal. All Rights Reserved.

import React, {Component} from 'react'
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,
    RefreshControl, TextInput,
} from 'react-native'
import TaskItemContainer from '../../containers/ToDo/TaskItemContainer'

export default class TaskListComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <FlatList
                    data={this.props.tasks}
                    renderItem={({item, index}) => {
                        return (
                            <TaskItemContainer {...item}/>
                        )
                    }}
                    keyExtractor={(item, index) => item.taskName}
                />
            </View>
        )
    }
}
