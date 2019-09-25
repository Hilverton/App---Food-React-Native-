import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Controllers extends Component {
  //const p = data.price;
  constructor(props){
    super(props);
    this.state = {
      price: this.props.total,
      value: 1,
      original: this.props.total,
    }
  }

  add = () =>{
    let newValue = this.state.value + 1;
    let newPrice = parseFloat((this.state.original * newValue).toFixed(2));
    this.setState({
      value: newValue,
      price: newPrice,
    });
  }

  sub = () => {
    if(this.state.value === 1) return;
    let newValue = this.state.value - 1;
    let newPrice = parseFloat((this.state.original * newValue).toFixed(2));
    this.setState({
      value: newValue,
      price: newPrice,
    });
  }

  render(){
    const { price, value } = this.state;
    return(
      <View style={styles.titleSection}>
        <View>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.button} onPress={() => this.sub()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.value}>{value}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.add()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 18,
  },
  title: {
    fontSize: 16,
    color: '#459D72',
  },
  price: {
    fontSize: 14,
  },
  box: {
    width: 76,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 25,
    height: 20,
    backgroundColor: '#459D72',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: 'white',
  },
  value: {
    marginLeft: 10,
    marginRight: 10,
  },
});