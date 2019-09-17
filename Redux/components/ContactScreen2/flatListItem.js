// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, FlatList, Image, ImageBackground} from 'react-native'
import styles from '../../asset/stylesheet/styles'
import flatListData from './flatListData'
import {Header} from 'react-native-elements'
import {MyCustomCenterComponent, MyCustomLeftComponent} from '../layout/header'
import CategoryListItem from './CategoryListItem'

// import {StackActions} from "react-navigation";
// import ScreenLogin from "../btl1/login";

export default class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: flatListData,
        }
    }

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

  goToDetail = (item) => {
      this.props.navigation.navigate('Detail', {
          getItem: item,
      })
  };

  openMenu = () => {
      this.props.navigation.toggleDrawer()
  };

  render() {
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
                  data={this.state.dataList}
                  keyExtractor={(item) => item.key}
                  renderItem={({item}) => (
                      <CategoryListItem
                          item={item}
                          navi={this.goToDetail}
                      />
                  )}
              />
          </View>
      )
  }
}
