import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import FoodProductItemComponent from './FoodProductItemComponent';

export default class FoodProductsComponent extends Component {

  constructor(props) {
    super(props);
    this.data = [
      { name: "Jogurt0", price: "1.99" },
      { name: "Jogurt1", price: "2.99" },
      { name: "Jogurt2", price: "3.99" },
      { name: "Jogurt3", price: "4.99" },
      { name: "Jogurt1", price: "2.99" },
      { name: "Jogurt2", price: "3.99" },
      { name: "Jogurt3", price: "4.99" }
    ]
  }

  render() {
    return (
        <View style={styles.cardContainer}>
          { 
            this.data.map(product => 
              <FoodProductItemComponent name={product.name} price={product.price}> </FoodProductItemComponent>) 
          }
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
