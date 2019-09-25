import React from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return(
    <View>
      <View style={styles.top}>
        <View>
          <Text style={styles.type}>DELIVERY TO</Text>
          <View style={styles.placeStyle}>
            <Icon name="map-marker" size={15} />
            <Text style={styles.place}>New York, NY</Text>
            <Icon name="angle-down" size={15} />
          </View>
        </View>
        <View>
          <Image source={require('./../assets/Home/shop.png')} />
        </View>
      </View>
      
      <View style={styles.boxInput}>
        <TextInput style={styles.input} placeholder="Search for restaurants, dishes or cuisines" />
        <Icon name="search" size={15} />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  top: {
    paddingTop: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  type: {
    fontSize: 10,
    color: 'gray',
  },
  placeStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  place: {
    fontSize: 14,
    color: '#459D72',
    paddingTop: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D0D0D0',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 17,
    marginRight: 15,
    marginLeft: 15,
    paddingRight: 10,
  },
  input: {
    height: 36,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    flex: 1,
  },
});