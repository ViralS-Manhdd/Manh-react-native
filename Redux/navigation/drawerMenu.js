// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {createDrawerNavigator} from 'react-navigation-drawer'
import ContactListComponent from '../components/ContactScreen/ContactListComponent'
import DrawerMenu from './drawerComponent'
import {Dimensions} from 'react-native'
import TabNavigator from './topTab'
import CounterContainer from '../containers/AppCounter/CounterContainer'
import ChatContainer from '../containers/AppChat/ChatContainer'

var {width} = Dimensions.get('window')

const DrawerNavigator = createDrawerNavigator(
    {
        Chat: {
            screen: ChatContainer,
        },
        Contact: {
            screen: ContactListComponent,
        },
        Chat1: TabNavigator,
        Test1: CounterContainer,
    },
    {
        hideStatusBar: false,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#f6787b38',
        drawerWidth: width - 80,
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#f6787b',
        },
        drawerType: 'back',
        contentComponent: DrawerMenu,
    }
)

export default DrawerNavigator
