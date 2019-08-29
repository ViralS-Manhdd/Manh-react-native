import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {styles} from './src/components/';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.top_left}>
            <View style={styles.top_left_t}/>
            <View style={styles.top_left_b}/>
          </View>
          <View style={styles.top_right}>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottom_left}>
          </View>
          <View style={styles.bottom_center}>
          </View>
          <View style={styles.bottom_right}>
            <View style={styles.bottom_right_t}/>
            <View style={styles.bottom_right_b}/>
          </View>
        </View>
        {/*<View style={[styles.rectangle, {backgroundColor: "red"}]}/>*/}
        {/*<View style={[styles.rectangle, {backgroundColor: "blue"}]}/>*/}
        {/*<View style={[styles.rectangle, {backgroundColor: "green"}]}/>*/}
      </View>
    );
  }
}

export default App;