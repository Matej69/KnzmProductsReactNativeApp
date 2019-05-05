import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Alert} from 'react-native';
import FoodProductItemComponent from './FoodProductItemComponent';
import firebase from '../firebase';

export default class FoodProductsComponent extends Component {

  constructor(props) { 

    super(props);
    this.state = { products: []};



  // Initialize Firebase
  var productsDb = firebase.database().ref('products');

  productsDb.orderByChild('priceBase').equalTo('7').once('value', (data) => {
    var value;
    var products = [];
    Object.keys(data.toJSON()).forEach(function(key) {
      if(key < 30) {
        value = data.toJSON()[key];
        products.push({name: value.name, price: value.priceBase+'.'+value.priceExtension+' kn', imgSrc: value.imgSrc});
        console.log(value);
      }
    });
    this.setState(
      { products: products }
    )
  });


  }

  render() {
    return (
        <View style={styles.cardContainer}>
          { 
            this.state.products.map(product => 
              <FoodProductItemComponent name={product.name} price={product.price} imgSrc={product.imgSrc}> </FoodProductItemComponent>) 
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
