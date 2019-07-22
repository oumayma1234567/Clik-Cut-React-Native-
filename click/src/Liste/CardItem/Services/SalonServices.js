import React, { Component } from 'react';
import { View, Image,ScrollView,TouchableOpacity} from 'react-native'
import ServicesCardItem from './servicescarditem/ServicesCardItem';

export default class SalonServices extends Component {
  static navigationOptions = {
    header:null
  };
  render() {
    return (
 <View>
 <ScrollView Vertical={true}> 
   <TouchableOpacity onPress={()=>this.props.navigation.navigate('Coiffure')}>
   <ServicesCardItem
   text1="Homme-coupe à la tondeuse"
   text2="à partir de"
   imageUri1={require('../../../images/checked.png')}
   imageUri2={require('../../../images/info.png')}
   heure="20 min"
   imageUri3={require('../../../images/timing.png')}
   text3="Détaile"
   prix="15,5"
   itemIcon=""
   />
  </TouchableOpacity>
  <TouchableOpacity>
   <ServicesCardItem
   text1="Homme-coupe à la tondeuse"
   text2="à partir de"
   imageUri1={require('../../../images/checked.png')}
   imageUri2={require('../../../images/info.png')}
   heure="20 min"
   imageUri3={require('../../../images/timing.png')}
   text3="Détaile"
   prix="15,5"
   itemIcon=""
   />
  </TouchableOpacity>
  </ScrollView>
 </View>
    );
  }
}