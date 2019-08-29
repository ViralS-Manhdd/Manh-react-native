// Copyright (c) 2019-present, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Button, Icon} from 'react-native-elements'

export class MyCustomLeftComponent extends Component {
  pressBtnLeft = () => this.props.btnLeft();

  render() {
      return (
          <View>
              <TouchableOpacity onPress={this.pressBtnLeft}>
                  <Icon
                      name={this.props.iconLeft}
                      type='font-awesome'
                      color='#FFF'
                  />
              </TouchableOpacity>
          </View>
      )
  }
}

export class MyCustomCenterComponent extends Component {
    render() {
        return (
            <View>
                <Text style={{color: '#fff', fontSize: 25}}>{this.props.title}</Text>
            </View>
        )
    }
}

export class MyCustomRightComponent extends Component {
    render() {
        return (
            <View>
                <Button
                    title='Next'
                    type='clear'
                />
            </View>
        )
    }
}
