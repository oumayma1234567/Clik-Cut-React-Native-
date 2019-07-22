import React, { Component } from 'react';

import {createStackNavigator, createAppContainer  } from 'react-navigation';
import Prestations from './Prestations/Prestations'
import Click from './Click'
import WelcomeDate from './WelcomeDate'
import WelcomeLieu from './WelcomeLieu'
import WelcomePrestations from './WelcomePrestations'
import Lieu from './lieu/Lieu';
import Date from './ajonda/Date'
import Header from './Header'
import WelcomeClick from '../WelcomClick';
import SignInScreen from '../Screen/SignInScreen';
import AuthLoadingSreen from '../Screen/AuthLoadingSreen';
// import NavigationDrawerGategories from '../NavigationDrawerGategories'
const RootNavigator = createStackNavigator({
  // Header: {
  //   screen: Header,
  //   navigationOptions: {
  //     title: 'Click',
  //     headerLeft: false
  //   }
  // },
  Click: {
    screen: Click,
    navigationOptions: {
      title: 'Click',
      headerLeft: false
    }
  },
  WelcomeDate: {
      screen: WelcomeDate,
      navigationOptions: {
        headerTitle: <Date/>,
      }
  },
  WelcomeLieu: {
    screen: WelcomeLieu,
    navigationOptions: {
      headerTitle: <Lieu />,
    }
},

WelcomePrestations: {
  screen: WelcomePrestations,
  navigationOptions: {
    headerTitle: <Prestations />,
  }
},
AuthLoadingSreen : {
  screen:AuthLoadingSreen,
  navigationOptions: {
    header:null
  }
 
},
// NavigationDrawerGategories:{
//   screen:NavigationDrawerGategories,
// },
});

export default createAppContainer (RootNavigator);