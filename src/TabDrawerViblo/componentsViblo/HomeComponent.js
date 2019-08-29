// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'

export default class HomeComponent extends Component {
  static navigationOptions = ({navigation}) => {
      const {params = {}} = navigation.state
      const tabBarLabel = 'Home'
      const tabBarIcon = () => (
          <Image
              source={require('./../imagesViblo/wallet.png')}
              style={{width: 26, height: 26, tintColor: '#0067a7'}}
          />
      )
      return {tabBarLabel, tabBarIcon}
  }

  render() {
      return (
          <View
              style={{
                  flex: 1,
                  backgroundColor: '#0067a7',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
          >
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>This is Home Screen</Text>
          </View>
      )
  }
}
