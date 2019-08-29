// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'

export default class MyWalletComponent extends Component {
  static navigationOptions = ({navigation}) => {
      const {params = {}} = navigation.state
      const tabBarLabel = 'Home'
      const tabBarIcon = () => (
          <Image
              source={require('./../imagesViblo/tabs.png')}
              style={{width: 26, height: 26, tintColor: '#007256'}}
          />
      )
      return {tabBarLabel, tabBarIcon}
  }

  render() {
      return (
          <View
              style={{
                  flex: 1,
                  backgroundColor: '#007256',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
          >
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>This is My Wallet Screen</Text>
          </View>
      )
  }
}
