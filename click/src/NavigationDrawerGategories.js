import React, { Component } from 'react';

import {createStackNavigator, createAppContainer  } from 'react-navigation';
import HeaderCategories from './Carte/Carousel/HeaderCategories'
import WelcomeAccordion from './Carte/WelcomeAccordion'
import AccordionCategory from './Carte/Carousel/AccordionCategory'
import MenuDrawer from './MenuDrawer'
const  MainNavigator = createStackNavigator({
    MenuDrawer : {
    screen: MenuDrawer,
    navigationOptions: {
      header:null
    }
  
  },
  AccordionCategory  : {
      screen: AccordionCategory ,
      navigationOptions: {
        headerTitle: <HeaderCategories />,
      }
  
  },
});

export default createAppContainer ( MainNavigator);