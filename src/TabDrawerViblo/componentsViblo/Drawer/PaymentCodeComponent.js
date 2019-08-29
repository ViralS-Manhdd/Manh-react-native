// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import HeaderComponent from './HeaderComponent'

export default class PaymentCodeComponent extends Component {
  static navigationOptions = ({navigation}) => {
      const drawerLabel = 'Withdrawal'
      const drawerIcon = () => (
          <Image
              source={require('./../../imagesViblo/tabs.png')}
              style={{width: 26, height: 26, tintColor: '#964f8e'}}
          />
      )
      return {drawerLabel, drawerIcon}
  }

  render() {
      return (
          <View style={{flex: 1, flexDirection: 'column'}}>
              <HeaderComponent {...this.props}/>
              <View
                  style={{
                      flex: 1,
                      backgroundColor: '#964f8e',
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}
              >
                  <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
            This is Payment Code Screen
                  </Text>
              </View>
          </View>
      )
  }
}
