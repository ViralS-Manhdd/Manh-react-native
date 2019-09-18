// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {ADD_NEW_TASK, TOGGLE_ONE_TASK, EDIT_CONTACT, DROP_CONTACT, ADD_NEW_CONTACT} from './actionTypes'
let newTaskId = 0

//Action: "add new Task"
export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: newTaskId++,
        taskName: inputTaskName,
    }
}

//Action: "toggle 1 task to completed / incompleted"
export const toggleTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId,
    }
}

let newCtId = 0

//Action: Them moi danh ba
export const addContact = (newContactName) => {
    return {
        type: ADD_NEW_CONTACT,
        ctID: newCtId++,
        user: newContactName,
    }
}

//Action: Sua thong tin
export const editContact = (ctID, newUserName, newUserNumber) => {
    return {
        type: EDIT_CONTACT,
        ctID,
        newUserName,
        newUserNumber,
    }
}

///Action: Xoa danh ba
export const dropContact = (ctID) => {
    return {
        type: DROP_CONTACT,
        ctID,
    }
}

