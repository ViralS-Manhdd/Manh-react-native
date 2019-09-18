// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, FlatList, Image, ImageBackground} from 'react-native'
import styles from '../../asset/stylesheet/styles'

import {Header} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'

//redux
import ListItemContainer from '../../containers/Contact/ListItemContainer'

export default class ContactListComponent extends Component {
    // static navigationOptions = ({navigation}) => {
    //     const {params = {}} = navigation.state
    //     const tabBarLabel = 'Home'
    //     const tabBarIcon = () => (
    //         <Image
    //             source={require('./../../TabDrawerViblo/imagesViblo/home.png')}
    //             style={{width: 26, height: 26, tintColor: '#007256'}}
    //         />
    //     )
    //     return {tabBarLabel, tabBarIcon}
    // }
    goEdit = () => {
        this.props.navigation.navigate('EditDetail')
    }
  goToDetail = (item) => {
      this.props.navigation.navigate('Detail', {
          getItem: item,
      })
  };

  openMenu = () => {
      this.props.navigation.toggleDrawer()
  };

  render() {
      console.log('flatlist', this.props.contact)
      return (
          <View style={styles.container}>
              <ImageBackground
                  style={{width: '100%'}}
                  source={require('../../asset/images/backgroud-headerbar.png')}
              >
                  <Header
                      containerStyle={{
                          backgroundColor: 'transparent',
                          marginTop: -25,
                      }}
                      leftComponent={
                          <MyCustomLeftComponent
                              iconLeft='bars'
                              btnLeft={this.openMenu}
                          />
                      }
                      centerComponent={<MyCustomCenterComponent title={'Danh Bạ'}/>}

                      //rightComponent={<MyCustomRightComponent/>}
                  />
              </ImageBackground>
              <FlatList
                  style={{flex: 1}}
                  data={this.props.contact}
                  renderItem={({item}) => (
                      <ListItemContainer
                          {...item}
                          navi={this.goToDetail}
                          havi={this.goEdit}
                      />
                  )}
                  keyExtractor={(item, index) => item.ctID}
              />
          </View>
      )
  }
}
