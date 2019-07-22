import React, { Component } from 'react';

import {createStackNavigator, createAppContainer  } from 'react-navigation';
import Click from './Click'
import  Header from '../src/Click/Header'
import SignInScreen  from '../src/Screen/SignInScreen'
import Navigation from '../src/Click/Navigation'
import WelcomeClick from '../src/WelcomClick'
const RootNavigator = createStackNavigator({
  Header: {
    screen: Header,
    // navigationOptions: {
    //   title: 'Click',
    //   headerLeft: false
    // }
  },
  WelcomeClick  : {
      screen:SignInScreen ,
  },
});

export default createAppContainer (RootNavigator);