// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {dropContact, editContact} from '../../actions'
import {connect} from 'react-redux'
import EditComponent from '../../components/EditContactScreen/EditComponent'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (ctID, newUserName, newUserNumber) => {
            dispatch(editContact(ctID, newUserName, newUserNumber))
        },
        onClickDrop: (ctID) => {
            dispatch(dropContact(ctID))
        },
    }
}

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(EditComponent)
export default EditContainer
