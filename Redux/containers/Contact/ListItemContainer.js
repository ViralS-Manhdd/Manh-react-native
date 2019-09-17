// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {connect} from 'react-redux'
import ContactListItem from '../../components/ContactScreen/ContactListItem'

const mapStateToProps = (state) => {
    return {
        contact: state.contactReducers ? state.contactReducers : [],
    }
}

const ListItemContainer = connect(mapStateToProps)(ContactListItem)
export default ListItemContainer
