// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import {createDrawerNavigator} from 'react-navigation-drawer'
import ContactListComponent from '../components/ContactScreen/ContactListComponent'
import ScreenChat from '../components/ChatScreen/chat'
import DrawerMenu from './drawerComponent'
import {Dimensions} from 'react-native'
import TabNavigator from './topTab'

var {width} = Dimensions.get('window')

const DrawerNavigator = createDrawerNavigator(
    {
        Chat: {
            screen: ScreenChat,
        },
        Contact: {
            screen: ContactListComponent,
        },
        Chat2: TabNavigator,
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
