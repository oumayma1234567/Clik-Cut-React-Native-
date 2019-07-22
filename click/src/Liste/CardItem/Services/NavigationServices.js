import React, { Component } from 'react';

import {createStackNavigator, createAppContainer  } from 'react-navigation';

import WelcomeServices from './WelcomeServices'
import Coiffure from './Coiffure'
import SalonServices from './SalonServices'
import AutresServices from './AutresServices'
import HeaderServices from './HeaderServices'
import CategoriesServices from './CategoriesServices'
const RootNavigator = createStackNavigator({
  SalonServices : {
    screen: SalonServices,
    navigationOptions: {
      title: 'SalonServices',
      headerLeft: false
    }
  },
    Coiffure : {
    screen: Coiffure,
    navigationOptions: {
      headerTitle: <HeaderServices/>,

    }
  },
  WelcomeServices : {
      screen: WelcomeServices ,
      navigationOptions: {
       headerTitle: <HeaderServices/>,
      }
  },
  
  AutresServices : {
    screen: AutresServices ,
    navigationOptions: {
      headerTitle: <HeaderServices/>,
    }
},

});

export default createAppContainer (RootNavigator);