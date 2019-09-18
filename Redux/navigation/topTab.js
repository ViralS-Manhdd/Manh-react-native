// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import createBottomTabNavigator from 'react-navigation-tabs/src/navigators/createBottomTabNavigator'
import AddContactComponent from '../components/AddContactScreen/AddContactComponent'
import ContactListContainer from '../containers/Contact/ContactListContainer'

const TabNavigator = createBottomTabNavigator(
    {
        Tab2: ContactListContainer,
        Tab1: AddContactComponent,
    }
)

export default TabNavigator
