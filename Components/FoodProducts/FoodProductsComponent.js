import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


export default class FoodProductsComponent extends Component {
  render() {
    return (
      <View>
        <Text> ### Component loaded ###</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: 'green'
  }
});

AppRegistry.registerComponent('FoodProductsComponent', () => FoodProductsComponent);
