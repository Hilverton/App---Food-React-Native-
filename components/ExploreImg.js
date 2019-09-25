import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const ExploreImg = ({ data }) => {
  return (
    <ImageBackground style={styles.img} source={data.url} key={data.id}>
      <View style={styles.info}>
        <Text style={styles.title}>{data.place}</Text>
        <Text style={styles.qtd}>{data.qtd} Restaurants</Text>
      </View>
    </ImageBackground>
  );
}

export default ExploreImg;

const styles = StyleSheet.create({
  img: {
    width: 160,
    height: 100,
    marginBottom: 14,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  qtd: {
    color: 'white',
    fontSize: 12,
  },
});