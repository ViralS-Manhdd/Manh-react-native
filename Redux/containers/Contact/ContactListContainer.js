// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import ContactListComponent from '../../components/ContactScreen/ContactListComponent'
import AddComponent from "../../components/ToDoScreen/AddComponent";

const mapStateToProps = (state) => {
    return {
        contact: state.contactReducers ? state.contactReducers : [],
    }
}

const ContactListContainer = connect(mapStateToProps)(ContactListComponent)
export default ContactListContainer
