// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {addContact} from '../../actions'
import {connect} from 'react-redux'
import AddComponent from '../../components/AddContactScreen/AddComponent'
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (newContactName) => {
            dispatch(addContact(newContactName))
        },
    }
}

const AddContactContainer = connect(mapStateToProps, mapDispatchToProps)(AddComponent)
export default AddContactContainer
