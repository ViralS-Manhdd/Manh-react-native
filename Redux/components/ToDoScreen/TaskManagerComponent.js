// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Platform} from 'react-native'

import AddContainer from '../../containers/ToDo/AddContainer'
import TaskListContainer from '../../containers/ToDo/TaskListContainer'

export default class TaskManagerComponent extends Component {
    render() {
        console.log(this.props, '111111')
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <AddContainer/>
                <TaskListContainer/>
            </View>
        )
    }
}
