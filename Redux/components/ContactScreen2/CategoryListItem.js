// Copyright (c) 2019-present, Personal. All Rights Reserved.

import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {Button, Header, Icon} from 'react-native-elements'
import styles from '../../asset/stylesheet/styles'

export default class CategoryListItem extends Component {
  goToDetail = () => this.props.navi(this.props.item);

  render() {
      // const item = this.props.item;
      const {item} = this.props
      return (
          <TouchableOpacity >
              <View style={styles.categoryItem}>
                  <View style={styles.avatar}>
                      {/*<Image style={styles.img} source={contactImg}/>*/}
                      <Image
                          style={styles.img}
                          source={{uri: item.ava}}
                      />
                  </View>
                  <View style={style.infoUser}>
                      <View style={styles.name_contact}>
                          <Text style={style.name}>{item.name}</Text>
                      </View>
                      <View style={styles.info_contact}>
                          <Text style={style.p_r_10}>{item.status}</Text>
                          <Text style={style.p_r_10}>{item.time}</Text>
                          <Text style={style.p_r_10}>{item.ct}</Text>
                      </View>
                  </View>
                  <View style={style.btnDetail}>
                      <Button
                          title='Details'
                          onPress={this.goToDetail}
                          type='clear'
                      />
                  </View>
              </View>
          </TouchableOpacity>
      )
  }
}

const style = StyleSheet.create({
    infoUser: {
        flex: 6,
        flexDirection: 'column',
        marginTop: 5,
    },
    name: {
        paddingTop: 5,
        fontWeight: 'bold',
    },
    p_r_10: {
        paddingRight: 10,
    },
    btnDetail: {
        flex: 3,
        flexDirection: 'column',
    },
})
