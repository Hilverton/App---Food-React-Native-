import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemsProfile = ({ data }) => {
  return (
    <View style={styles.box} key={data.id}>
      <View style={styles.boxItem}>
        <View style={styles.item}>
          <Image source={data.url} />
          <Text style={styles.text}>{data.title}</Text>
        </View>
        <Icon name="angle-right" size={20} />
      </View>
    </View>
  );
}

export default ItemsProfile;

const styles = StyleSheet.create({
  boxItem: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 22,
    color: '#342B2B',
  },
});