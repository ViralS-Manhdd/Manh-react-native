// Copyright (c) 2019-present. Personal. All Rights Reserved.

import AddComponent from '../../components/ToDoScreen/AddComponent'
import {addNewTask} from '../../actions/index'
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent)
