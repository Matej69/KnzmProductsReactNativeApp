import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';


export default class FoodProductItemComponent extends Component {

  render() {
    return (
      <View style={styles.productItem}>
        <Text >DsaD</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  productItem: {
    width: (100/3) + "%" ,
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: 'red',
    backgroundColor: "pink",
  }
});

AppRegistry.registerComponent('FoodProductItemComponent', () => FoodProductItemComponent);
