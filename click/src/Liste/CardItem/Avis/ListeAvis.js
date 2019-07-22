import React, { Component } from 'react';
import { View, Image,ScrollView,TouchableOpacity} from 'react-native'
import CardAvis from './cardavis/CardAvis';

export default class ListeAvis extends Component {

  render() {
    
    return (
 <View>
   <TouchableOpacity >
   <CardAvis
   imageUri={require('../../../images/img1.jpg')}
   text="Henry Little"
   date="Mars 27,2019"
   heurs="07:45"
   rating={4}
   text1="the idea that beautiful and functional everyday"
   text2="objects should not only be affordable to the wealthy"
   />
  </TouchableOpacity>
  <TouchableOpacity >
   <CardAvis
   imageUri={require('../../../images/img1.jpg')}
   text="Henry Little"
   date="Mars 27,2019"
   heurs="07:45"
   rating={4}
   text1="the idea that beautiful and functional everyday"
   text2="objects should not only be affordable to the wealthy"
   />
  </TouchableOpacity>
 </View>
    );
  }
}