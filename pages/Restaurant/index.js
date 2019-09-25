import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FoodR from './../../components/FoodR';
import Controllers from './../../components/Controllers';

import { rest, populars, foodMenu } from './../../mocks';

export default function Restaurant({ navigation }) {
  return(
    <ScrollView>
      <ImageBackground source={require('./../../assets/Restaurant/panel.png')} style={styles.imgBack}>
        <View style={styles.navigation}>
          <Icon name="arrow-left" color="white" size={20} onPress={() => navigation.navigate('Home')}/>
          <View style={styles.two}>
            <Image source={require('./../../assets/Restaurant/bookmark.png')}/>
            <Image source={require('./../../assets/Restaurant/shop.png')}/>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.infoRest}>
        <Text style={styles.nameRest}>Zillion Reasons</Text>
        <Text style={styles.foods}>Italian, Vegan, Snacks</Text>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Image source={require('./../../assets/Restaurant/time.png')} />
            <Text style={styles.boxItemText}>10-20mins</Text>
          </View>
          <View style={styles.boxItem}>
            <Image source={require('./../../assets/Restaurant/tag.png')} />
            <Text style={styles.boxItemText}>$$</Text>
          </View>
          <View style={styles.boxItem}>
            <Image source={require('./../../assets/Restaurant/location.png')} />
            <Text style={styles.boxItemText}>New York, NY</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.textTitle}>Best Sellers</Text>
        <ScrollView
          style={styles.side}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {
            rest.map(r => {
              return(
                <FoodR data={r} />
              );
            })
          }
        </ScrollView>
      </View>

      <View style={styles.line}></View>

      <View style={styles.popular}>
        <Text style={{fontSize: 16, marginBottom: 28,}}>Most Popular</Text>
        {
          populars.map(popular => {
            return(
              <Controllers title={popular.title} total={popular.price}/>
            );
          })
        }
      </View>

      <View style={styles.boxTitleSection}>
        <View style={styles.boxTitle}>
          <Text style={styles.boxTitleText}>Food Menu</Text>
        </View>
      </View>
      <View style={{marginLeft: 15,}}>
        <FoodR data={foodMenu} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgBack: {
    width: '100%', 
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 49,
  },
  two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 69,
  },
  infoRest: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 120,
    marginTop: -58,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#E7E7E7',
    borderRadius: 4,
    borderWidth: 1,
  },
  nameRest: {
    fontSize: 20,
    color: '#342B2B',
    marginBottom: 7,
  },
  foods: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  box: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 239,
  },
  boxItem: {
    flexDirection: 'row',
  },
  boxItemText: {
    marginLeft: 1,
  },
  section:{
    marginLeft: 15,
    marginTop: 30,
  },
  textTitle: {
    fontSize: 16,
  },
  side: {
    marginBottom: 18,
    paddingTop: 18,
  },
  line: {
    backgroundColor: '#F2F2F4',
    height: 4,
    marginBottom: 30,
  },
  popular: {
    marginLeft: 15,
    marginRight: 15,
  },
  boxTitleSection: {
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  boxTitle: {
    width: 145, 
    height: 40,
    marginBottom: -20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    zIndex: 1,
  },
  boxTitleText: {
    fontSize: 16,
  },
});