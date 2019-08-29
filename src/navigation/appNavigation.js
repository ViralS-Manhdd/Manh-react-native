// Copyright (c) 2019-present, Personal. All Rights Reserved.

import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import ScreenLogin from '../components/btl1/login'
import FlatListItem from '../components/Day5/flatListItem'
import DetalContact from '../components/Day6/detalContact'
import CreateContactNumber from '../components/tabVer1/drawerTab2'

import DrawerNavigator from './drawerMenu'

// const TabNavigator = createBottomTabNavigator(
//     {
//         Tab1: FlatListItem,
//         Tab2: CreateContact,
//         Tab3: CreateContactNumber,
//     }
// )

const StackNavigator = createStackNavigator(
    {
        Login: ScreenLogin,
        Contact: FlatListItem,
        Detail: DetalContact,
        Chat1: DrawerNavigator,
        Create: CreateContactNumber,
    },
    {
        headerMode: 'none',
    }
)

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer
