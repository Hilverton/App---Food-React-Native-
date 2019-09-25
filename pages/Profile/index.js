import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemsProfile from './../../components/ItemsProfile';

import { items } from './../../mocks';

export default function Profile() {
  return(
    <ScrollView>
      <Image source={require('./../../assets/Profile/ground.png')} style={{height: 140,     width: '100%',}} />
      <View style={styles.user}>
        <View style={styles.edit}>
          <Image source={require('./../../assets/Profile/pencil.png')} style={{marginRight: 16, marginTop: 15}} />
        </View>
        <View style={styles.userInfo}>
          <Image source={require('./../../assets/Profile/user.png')} />
          <View style={styles.boxUser}>
            <Text style={styles.username}>Kishore</Text>
            <Text style={styles.mail}>contact@elitepixels.net</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        {
          items.map(item => {
            return (
              <ItemsProfile data={item} />
            );
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  user: {
    backgroundColor: 'white',
    height: 120,
    marginTop: -70,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#E7E7E7',
    borderRadius: 4,
    borderWidth: 1,
  },
  edit: {
    flexDirection: 'row-reverse',
  },
  userInfo: {
    marginLeft: 20,
    marginTop: -6,
    flexDirection: 'row',
    alginItems: 'center',
    backgroundColor: 'transparent',
  },
  boxUser: {
    flexDirection: 'column',
    marginLeft: 20, 
    justifyContent: 'center',
  },
  username: {
    fontSize: 20,
    color: '#342B2B',
  },
  mail: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  box: {
    marginTop: 35,
    marginLeft: 29,
    marginRight: 29,
  },
});