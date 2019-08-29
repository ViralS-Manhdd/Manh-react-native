// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'

export default class TransactionHistoryComponent extends Component {
  static navigationOptions = ({navigation}) => {
      const {params = {}} = navigation.state
      const tabBarLabel = 'Home'
      const tabBarIcon = () => (
          <Image
              source={require('./../imagesViblo/home.png')}
              style={{width: 26, height: 26, tintColor: '#964f8e'}}
          />
      )
      return {tabBarLabel, tabBarIcon}
  }

  render() {
      return (
          <View
              style={{
                  flex: 1,
                  backgroundColor: '#964f8e',
                  alignItems: 'center',
                  justifyContent: 'center',
              }}
          >
              <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>This is Transaction History Screen</Text>
          </View>
      )
  }
}
