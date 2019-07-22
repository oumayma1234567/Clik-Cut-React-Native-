import React, { Component } from 'react';
import { View, Image,ScrollView,TouchableOpacity} from 'react-native'
import RecommendedCardItem from './CardItem/RecommendedCardItem'

export default class Liste extends Component {
  static navigationOptions = {
    header:null
  };

  render() {
    
    return (
 <View>
   <ScrollView Vertical={true}> 
   <TouchableOpacity onPress={()=>this.props.navigation.navigate('WelcomeTabs')}>
   <RecommendedCardItem
   imageUri={require('../images/Accueil.png')}
   itemIcon1=""
   itemName="Dessange"
   itemIcon2=""
   ItemDistance="1.3 km"
   itemIcon3=""
   itemPrice="25"
   rating={4}
   avi="34 Avis"
   heure="30 min"
   itemIcon4=""
   />
  </TouchableOpacity>
    <RecommendedCardItem
   imageUri={require('../images/Accueil3.png')}
   itemIcon1=""
   itemName="Vog Coiffure Paris"
   itemIcon2=""
   ItemDistance="2.3 km"
   itemIcon3=""
   itemPrice="25"
   rating={3}
   avi="44 Avis"
   heure="30 min"
   itemIcon4=""
   />
     <RecommendedCardItem
   imageUri={require('../images/Accueil3.png')}
   itemIcon1=""
   itemName="Vog Coiffure Paris"
   itemIcon2=""
   ItemDistance="2.3 km"
   itemIcon3=""
   itemPrice="25"
   rating={3}
   avi="44 Avis"
   heure="30 min"
   itemIcon4=""
   />
</ScrollView>
 </View>
    );
  }
}