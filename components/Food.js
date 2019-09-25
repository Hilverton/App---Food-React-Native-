import React from 'react';
import { View, Image, ImageBackground, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const Food = ({ data, navigation }) => {
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant')}>
      <View style={styles.container}>
        {
          data.star && 
            <ImageBackground style={styles.imgBck} source={data.url} >
              <View style={styles.boxTextImg}>
                <Image source={require('../assets/Home/star.png')} style={styles.imgStar} />
                <Text style={styles.textImg}>{data.star}</Text>
              </View>
            </ImageBackground>
        }
        {
          !data.star &&
            <Image source={data.url} />
        }
        <View style={styles.titleSection}>
          <Text style={styles.title}>{data.title}</Text>
          {
            data.time &&
            <Text style={styles.time}>{data.time}</Text>
          }
        </View>
        <Text style={styles.subTitle}>{data.subTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Food;

const styles = StyleSheet.create({
  container:{
    marginRight: 10,
    marginTop: 18,
  },
  imgBck: {
    width: 160,
    height: 160,
    flexDirection: 'column-reverse',
  },
  boxTextImg: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 45,
    backgroundColor: '#459D72',
    borderRadius: 7,
    padding: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  textImg: {
    color: 'white',
    marginRight: 5,
  },
  imgStar: {
    marginRight: 3,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  title: {
    fontSize: 16,
    marginTop: 8,
    color: '#459D72',
  },
  time: {
    marginTop: 8,
    fontSize: 14,
    color: 'gray',
  },
  subTitle: {
    fontSize: 14,
  },
});