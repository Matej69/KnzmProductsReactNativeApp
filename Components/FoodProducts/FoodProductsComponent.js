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


  getServerData = (numOfItems) => {

    this.state.products = [];

    var products = [];
    this.setState(
      { products: products }
    );
    
    for(var i = 0; i <= numOfItems; ++i) {
      var randId = Math.floor(Math.random() * 100) + 1;
      this.state.productsDb.child(randId).once('value', (data) => {
        var productData = data.toJSON();
        products.push({id: randId, name: productData.name, price: productData.priceBase+'.'+productData.priceExtension+' kn', imgSrc: productData.imgSrc});
        this.setState(
          { products: products }
        );
      });
    };
    
    
  }



  render() {
    const items = this.state.products.map(product => {
      return <FoodProductItemComponent key={product.randId} name={product.name} price={product.price} imgSrc={product.imgSrc}> </FoodProductItemComponent>;
    });
    return (
        <View style={styles.cardContainer}>
          <Button onPress={this.getServerData.bind(this, 9)} title="Get data" color="#841584" style={styles.button}/>
          { items }
        </View>
    );
  }


}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  button: {
    height : '30'
  }
});


AppRegistry.registerComponent('FoodProductsComponent', () => FoodProductsComponent);
