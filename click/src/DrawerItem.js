

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {Icon} from 'native-base'
export default class DrawerItem extends React.Component {
  render() {
      const item= this.props.item
    return (
        <View>
      <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:20}} >
               
               <Text style={{color:'#ffffff'}} >{item.title}</Text>
             <View style={{flexDirection:'column'}}>
                 <Icon active name="arrow-forward" style={{color:'#ffffff'}} > {item.icon}</Icon>
           </View> 
           </View>
    <Text style={{borderWidth:0.5,height:0.5,borderColor:'#ffffff',borderLeftWidth:100}}></Text>
    
      </View>
    )
  }
}


