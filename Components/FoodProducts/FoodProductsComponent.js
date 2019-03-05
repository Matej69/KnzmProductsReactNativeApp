import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import FoodProductItemComponent from './FoodProductItemComponent';

export default class FoodProductsComponent extends Component {

  constructor(props) {
    super(props);
    this.data = [
      { title: "Jogurt", price: "1.99" },
      { title: "Jogurt1", price: "2.99" },
      { title: "Jogurt2", price: "3.99" },
      { title: "Jogurt3", price: "4.99" }
    ]
  }

  render() {
    return (
        <View style={styles.cardContainer}>
          <FoodProductItemComponent>DsaD</FoodProductItemComponent>
          <FoodProductItemComponent>DsaD</FoodProductItemComponent>
          <FoodProductItemComponent>DsaD</FoodProductItemComponent>
          <FoodProductItemComponent>DsaD</FoodProductItemComponent>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: 'wrap'
  }
});


AppRegistry.registerComponent('FoodProductsComponent', () => FoodProductsComponent);
