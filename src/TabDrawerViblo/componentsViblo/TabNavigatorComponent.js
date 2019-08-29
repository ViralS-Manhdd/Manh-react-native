// Copyright (c) 2019-present, Personal. All Rights Reserved.
import {createBottomTabNavigator} from 'react-navigation'
import HomeComponent from './HomeComponent'
import PromotionComponent from './PromotionComponent'
import TransactionHistoryComponent from './TransactionHistoryComponent'
import MyWalletComponent from './MyWalletComponent'

const routeConfigs = {
    Home: {
        screen: HomeComponent,
    },
    Promotion: {
        screen: PromotionComponent,
    },
    Transaction: {
        screen: TransactionHistoryComponent,
    },
    MyWallet: {
        screen: MyWalletComponent,
    },
}

const tabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10,
        },
    },
    order: ['Home', 'Promotion', 'Transaction', 'MyWallet'],
}

const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig)

export default TabNavigator
