

import {createStackNavigator, createAppContainer ,createSwitchNavigator } from 'react-navigation';

import SignInScreen from './SignInScreen'
import WelcomeScreen from './WelcomeScreen'
import Liste from '../Liste/Liste'
import WelcomeTabs from '../Liste/WelcomeTabs'
import CardItemNavigation from '../Liste/CardItemNavigation';
import SignUp from './SignUp'
const RootNavigator = createStackNavigator({

  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'SignInScreen',
      headerLeft: false
    }
  },
  WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerLeft: false
      }

  },

  WelcomeTabs: {
    screen: WelcomeTabs,
    navigationOptions: {
      title: 'WelcomeTabs',
      headerLeft: false
    }
},
SignUp: {
  screen: SignUp,
},
  
});

export default createAppContainer (RootNavigator);