// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import AddContactComponent from '../components/AddContactScreen/AddContactComponent'
import ContactListContainer from "../containers/Contact/ContactListContainer";

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Tab2: ContactListContainer,
        Tab1: AddContactComponent,
    }
)

export default TabNavigator
