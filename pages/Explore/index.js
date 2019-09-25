import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import Header from './../../components/Header';
import ExploreImg from './../../components/ExploreImg';

import { imgs } from './../../mocks';

export default function Explore() {
  return(
    <ScrollView>
      <Header />
      <View style={styles.content}>
        <Text style={styles.place}>Explore New York</Text>
        <View style={styles.boxImg}>
          {
            imgs.map(img => {
              return( 
                <ExploreImg data={img}/> 
              );
            })
          }
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginLeft: 15,
    marginTop: 30,
    marginRight: 15,
  },
  place: {
    fontSize: 16,
    marginBottom: 18,
  },
  boxImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});