// Copyright (c) 2019-present. Personal. All Rights Reserved.

import {connect} from 'react-redux'
import TaskListComponent from '../../components/ToDoScreen/TaskListComponent'

const mapStateToProps = (state) => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    return {
        tasks: state.taskReducers ? state.taskReducers : [],
    }
}

const TaskListContainer = connect(mapStateToProps)(TaskListComponent)
export default TaskListContainer
