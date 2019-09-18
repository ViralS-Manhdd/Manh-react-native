// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {ADD_NEW_CONTACT, DROP_CONTACT, EDIT_CONTACT} from './../actions/actionTypes'

const contactReducers = (contact = [], action) => {
    switch (action.type) {
    case ADD_NEW_CONTACT:
        return [
            ...contact,
            {
                ctID: action.ctID,
                user: action.user,
                sdt: '123456789',
                status: 'ABC',
                time: new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1'),
                ct: 'Work',
                ava: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            },
        ]
    case DROP_CONTACT:
        return contact = contact.filter((item) => item.ctID !== action.ctID)
    case EDIT_CONTACT:
        return contact.map((ct) => (
            (ct.ctID === action.ctID) ?
                {...ct, user: action.newUserName, sdt: action.newUserNumber} : ct)
        )
    default:
        return contact //state does not change
    }
}

export default contactReducers
