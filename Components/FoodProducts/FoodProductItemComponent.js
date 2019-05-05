import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, ImageBackground} from 'react-native';


export default class FoodProductItemComponent extends Component {

  constructor(props) {
    super(props);
    this.data = {
      name: this.props.name,
      price: this.props.price,
      imgSrc: this.props.imgSrc
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
        <ImageBackground style={this.styles.productImage} source={{uri: this.data.imgSrc}}> 
          <Text style={this.styles.productText}>{this.data.name}</Text>
          <Text style={this.styles.productText}>{this.data.price}</Text>
        </ImageBackground>
        
      </View>
    );
  }

  
  styles = StyleSheet.create({
  productItem: {
    borderWidth: 0.5,
    borderColor: 'red',
    backgroundColor: "pink",
  },
  productImage: {
    width: "100%",
    height: "100%"
  },
  productText: {
    fontWeight: 'bold',
  }
});

  
}

AppRegistry.registerComponent('FoodProductItemComponent', () => FoodProductItemComponent);
