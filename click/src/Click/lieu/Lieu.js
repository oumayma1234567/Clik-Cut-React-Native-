import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import {Icon,Footer  } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class Lieu extends Component {
  render() {
    return (  
      <View style={{width:'100%',height:80}}>
      <LinearGradient colors={['#91684a','#260033']}>
      <View style={{flexDirection:'row',height:70,alignItems:'center',justifyContent:'center'}}>

        {/* <Icon name='menu' style={{ fontSize: 30 ,color:'#ffffff',paddingTop:10}} /> */}
    
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' ,paddingTop:10,color:'#ffffff'}}>LIEU</Text>
      </View>
    </View>
</LinearGradient>
</View>
    );
  }
}

