import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';
import Controllers from './Controllers';

const FoodR = ({ data }) => {
  return(
      <View style={styles.container} key={data.id}>

        <Image source={data.url} />

        <Controllers title={data.title} total={data.price}/>
      </View>
  );
}

export default FoodR;

const styles = StyleSheet.create({
  container:{
    marginRight: 15,
  },
});