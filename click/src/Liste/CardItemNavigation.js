import React, { Component } from 'react';

import {createStackNavigator, createAppContainer  } from 'react-navigation';

import Liste from './Liste'
import HeaderSalon from '../Liste/HeaderSalon'
import WelcomeTabs from './WelcomeTabs'

const RootNavigator = createStackNavigator({
  Liste: {
    screen: Liste,
    navigationOptions: {
      title: 'Liste',
      headerLeft: false
    }
  },
  WelcomeTabs: {
      screen: WelcomeTabs,
      navigationOptions: {
        headerTitle: <HeaderSalon/>,
      }
  },


});

export default createAppContainer (RootNavigator);