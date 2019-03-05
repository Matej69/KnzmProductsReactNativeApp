import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';


export default class FoodProductItemComponent extends Component {

  constructor(props) {
    super(props);
    this.data = {
      name: this.props.name,
      price: this.props.price
    }
    this.state = {
      cardSize: 0
    }
  }

  
  _onLayout = event => { 
    const {width, height} = Dimensions.get("window");
    const vertOriCardSize = ((100/3) + "%");
    const horOriCardSize = ((100/6) + "%");
    this.setState({cardSize: (height > width) ? vertOriCardSize : horOriCardSize});
  }


  render() {
    return (
      <View onLayout={this._onLayout} 
            style={[
              this.styles.productItem,
              { width: this.state.cardSize, aspectRatio: 1 }
        ]}>
        <Text>{this.data.name}</Text>
        <Text>{this.data.price}</Text>
      </View>
    );
  }

  
styles = StyleSheet.create({
  productItem: {
    borderWidth: 0.5,
    borderColor: 'red',
    backgroundColor: "pink",
  }
});

  
}

AppRegistry.registerComponent('FoodProductItemComponent', () => FoodProductItemComponent);
