// Copyright (c) 2019-present. Personal. All Rights Reserved.

import {connect} from 'react-redux'
import {toggleTask} from '../../actions'
import TaskItemComponent from '../../components/ToDoScreen/TaskItemComponent'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickToggle: (taskId) => {
            dispatch(toggleTask(taskId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemComponent)
