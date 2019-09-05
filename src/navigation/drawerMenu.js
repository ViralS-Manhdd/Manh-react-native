// Copyright (c) 2019-present, Personal. All Rights Reserved.
import {createDrawerNavigator} from 'react-navigation'
import FlatListItem from '../components/Day5/flatListItem'
import ScreenChat from '../components/btl1/chat'
import DrawerMenu from './drawerComponent'
import {Dimensions} from 'react-native'

var {width} = Dimensions.get('window')

const DrawerNavigator = createDrawerNavigator(
    {
        Chat: {
            screen: ScreenChat,
        },
        Roomchat: {
            screen: FlatListItem,
        },
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
