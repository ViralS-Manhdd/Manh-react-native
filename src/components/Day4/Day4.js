import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {styles} from './src/components/';
import CategoryListItem from "./src/components/Day4/MessageBox";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerListItem}>
          <Text style={{fontSize:20}}>Danh Bạ</Text>
        </View>
        <View style={styles.areaListItem}>
          <ScrollView>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
          </ScrollView>
        </View>

      </View>
    );
  }
}


