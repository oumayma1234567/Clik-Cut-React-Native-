import React, { Component } from 'react';
import { View,Text} from 'react-native'



export default class Horaires extends Component {
render() {
    return (

 <View>
<Text>HORAIRES</Text>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>LUNDI</Text>
  <Text>08:00-18:00</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>MARDI</Text>
  <Text>08:00-18:00</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>MERCREDI</Text>
  <Text>08:00-18:00</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>JEUDI</Text>
  <Text>08:00-18:00</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>VENDREDI</Text>
  <Text>08:00-18:00</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>SAMDI</Text>
  <Text>08:00-18:00</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text>DIMANCHE</Text>
  <Text>08:00-18:00</Text>
</View>
 </View>
    );
  }
}