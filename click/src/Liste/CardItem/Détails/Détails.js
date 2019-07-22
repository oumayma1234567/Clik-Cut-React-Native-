import React, { Component } from 'react';
import { View, Image,ScrollView} from 'react-native'
import Container from './DétailsContainer/Container'
import Map from './DétailsContainer/Map';
// import Horaires from './DétailsContainer/Horaires';

export default class Détails extends Component {
  static navigationOptions = {
    header:null
  };
render() {
    return (
 <View>
 
 <Container/>
 <Map/>

 </View>
    );
  }
}