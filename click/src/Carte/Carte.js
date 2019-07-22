import React, { Component } from 'react';
import { View} from 'react-native';

import Map from './Maps'
import Search from './Search'
import Carousel from './Carousel'


export default class Carte extends Component {
  render() {
    return (

      
  <View>
    <Search/>
      <Map/>
    <Carousel/>
</View>
      
    );
  }
}
