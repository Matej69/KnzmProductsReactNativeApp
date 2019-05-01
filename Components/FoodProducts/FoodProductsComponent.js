import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Alert} from 'react-native';
import FoodProductItemComponent from './FoodProductItemComponent';
import firebase from '../firebase';

export default class FoodProductsComponent extends Component {

  constructor(props) { 

  // Initialize Firebase
  firebase.database().ref('products').once('value', (data) => {
    // Alert.alert(data[0].toJSON());
    console.log(data.toJSON());
  });




    super(props);
    this.data = [
      { name: "Jogurt008", price: "1.99" },
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
