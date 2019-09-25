import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Restaurant from './pages/Restaurant';

const Switch = createSwitchNavigator({
  Home,
  Restaurant,
});

Switch.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: Switch,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="home" color={tintColor} size={25} />
        },
      }
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="search" color={tintColor} size={25} />
        }
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="user" color={tintColor} size={25} />
        }
      }
    },
  },
  {
    navigationOptions: {
      tabBarVisible: false,
    },
    
    tabBarOptions: {
      activeTintColor: '#459D72',
      inactiveTintColor: 'gray',
      style: {
        height: 60,
        paddingTop: 10,
        paddingBottom: 5,
      }
    },
  })
);