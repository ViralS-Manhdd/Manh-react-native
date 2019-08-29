// Copyright (c) 2019-present, Personal. All Rights Reserved.
import {Dimensions} from 'react-native'
import {createAppContainer, createDrawerNavigator} from 'react-navigation'
import HomeDrawerComponent from './HomeDrawerComponent'
import WithdrawalComponent from './WithdrawalComponent'
import PaymentCodeComponent from './PaymentCodeComponent'
import ScanCodeComponent from './ScanCodeComponent'

var {width} = Dimensions.get('window')
const routeConfigs = {
    Home: {
        screen: HomeDrawerComponent,
    },
    ScanCode: {
        screen: ScanCodeComponent,
    },
    Withdrawal: {
        screen: WithdrawalComponent,
    },
    PaymentCode: {
        screen: PaymentCodeComponent,
    },
}
const drawerNavigatorConfig = {
    initialRouteName: 'Home',
    drawerWidth: width / 2,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: ['Home', 'Withdrawal', 'PaymentCode', 'ScanCode'],
}
const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig)

const AppContainer = createAppContainer(DrawerNavigator)

export default AppContainer
