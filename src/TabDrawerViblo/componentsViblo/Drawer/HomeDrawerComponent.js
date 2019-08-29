// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Image} from 'react-native'
import HeaderComponent from './HeaderComponent'
import TabNavigator from './../../componentsViblo/TabNavigatorComponent'

// đưa tab vào page Home, nên chỉ có trang Home mới xuất hiện tab

const backgroundColor = '#0067a7'
export default class HomeComponent extends Component {
  static navigationOptions = ({navigation}) => {
      const drawerLabel = 'Home'
      const drawerIcon = () => (
          <Image
              source={require('./../../imagesViblo/home.png')}
              style={{width: 26, height: 26, tintColor: backgroundColor}}
          />
      )
      return {drawerLabel, drawerIcon}
  }

  render() {
      return (
          <View
              style={{
                  flex: 1,
                  flexDirection: 'column',
              }}
          >
              <HeaderComponent/>
              <TabNavigator/>
          </View>
      )
  }
}
