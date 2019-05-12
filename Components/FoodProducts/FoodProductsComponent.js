import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Alert, Button} from 'react-native';
import FoodProductItemComponent from './FoodProductItemComponent';
import firebase from '../firebase';

export default class FoodProductsComponent extends Component {

  constructor(props) { 

    super(props);
    this.state = { 
      products: [],
      productsDb: firebase.database().ref('products')
    };
    //let productsDb = firebase.database().ref('products');



  // Initialize Firebase
  //var productsDb = firebase.database().ref('products');

  this.state.productsDb.child(Math.floor(Math.random() * 100) + 1).once('value', (data) => {
    var productData = data.toJSON();
    var products = [];
    products.push({name: productData.name, price: productData.priceBase+'.'+productData.priceExtension+' kn', imgSrc: productData.imgSrc});
    this.setState(
      { products: products }
    )  
  });

  /*
  productsDb.orderByChild('priceBase').equalTo('7').once('value', (data) => {
    var value;
    var products =
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
  */

  }



  getServerData() {
    Alert.alert("boiii");
    /*
    productsDb.child(Math.floor(Math.random() * 100) + 1).once('value', (data) => {
      var productData = data.toJSON();
      var products = [];
      products.push({name: productData.name, price: productData.priceBase+'.'+productData.priceExtension+' kn', imgSrc: productData.imgSrc});
      this.setState(
        { products: products }
      )  
    });
    */
  }




  render() {
    return (
        <View style={styles.cardContainer}>
          { 
            this.state.products.map(product => 
              <FoodProductItemComponent name={product.name} price={product.price} imgSrc={product.imgSrc}> </FoodProductItemComponent>) 
          }
          <Button
  onPress={this.getServerData}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
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
