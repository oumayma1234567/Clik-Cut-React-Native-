import React from 'react';
import { Text, View ,Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';
import User from './Screen/User'
import Star from './Screen/Star'
import Calendrier from './Screen/Calendrier'
import Location from './Screen/Location'
import Store from './Screen/Store'
//import CardItemNavigation from '../Liste/CardItemNavigation';
import WelcomeTabs from '../Liste/WelcomeTabs';
// const StoreNav = createStackNavigator({
//     store: {screen : Store}, 
    
//     WelcomeTabs: { screen : WelcomeTabs},

// })
const TabNavigator = createBottomTabNavigator({ 
  Store: { screen:  Store},
  Location: { screen: Location},
  Calendrier: { screen: Calendrier},
  Star: { screen: Star},
  User: { screen: User }},
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true
    }
  
});

export default createAppContainer(TabNavigator);