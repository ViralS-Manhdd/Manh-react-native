// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ScreenLogin from '../components/LoginScreen/login'
import ContactListComponent from '../components/ContactScreen/ContactListComponent'
import DetalContact from '../components/ContactScreen/detalContact'

import DrawerNavigator from './drawerMenu'
import TaskManagerComponent from '../components/ToDoScreen/TaskManagerComponent'

const StackNavigator = createStackNavigator(
    {
        Login: ScreenLogin,
        Contact: ContactListComponent,
        Detail: DetalContact,
        Todo: TaskManagerComponent,
        Chat1: DrawerNavigator,
    },
    {
        headerMode: 'none',
    }
)

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer
