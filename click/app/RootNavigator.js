import {createStackNavigator, createAppContainer  } from 'react-navigation';

import Search from './Search'
import Welcomtab from './Welcomtab';


const RootNavigator = createStackNavigator({

  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Login',
      headerLeft: false
    }
  },
  Welcomtab: {
      screen: Welcomtab,
      navigationOptions: {
        title: 'Accordion'
      }
  },


});

export default createAppContainer (RootNavigator);