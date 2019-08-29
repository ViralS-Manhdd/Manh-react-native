
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {styles}  from './src/components/';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          width:300,
          height: 200,
          backgroundColor: "powderblue"
        }}/>
        <View style={
          styles.rectangle
        }/>
        <View style={[
          styles2.header,
          styles2.backgroundRed,
          {borderColor: "powderblue"}
        ]}/>
      </View>
    );
  }
}

export default App;

const styles2 = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    // borderColor:"",
    marginTop: 5
  },
  backgroundRed: {
    backgroundColor: "steelblue"
  }
});