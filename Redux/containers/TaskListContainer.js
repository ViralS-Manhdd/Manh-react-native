// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import TaskListComponent from '../components/TaskListComponent'

const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers,
    }
}

const TaskListContainer = connect(mapStateToProps)(TaskListComponent)
export default TaskListContainer
