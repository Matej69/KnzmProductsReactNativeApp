import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FoodProductsComponent from './Components/FoodProducts/FoodProductsComponent';


export default class MainApp extends Component {
  render() {
    return (
      <View>
        <FoodProductsComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
