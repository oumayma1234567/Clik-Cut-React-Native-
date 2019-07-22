import React, { Component } from 'react';
import { View, Image,ScrollView,TouchableOpacity} from 'react-native'
import RecommendedCardItem from './CardItem/RecommendedCardItem'
import Valider from './CardItem/Valider';

export default class FooterValider extends Component {

  render() {
    return (
 <View>
   <Valider
  itemPrice="15"
   itemIcon1=""
   heure="30 Min"
   itemIcon2="" 
   rating={4}
   avis="19"
   button="VALIDER"
   />
 </View>
    );
  }
}