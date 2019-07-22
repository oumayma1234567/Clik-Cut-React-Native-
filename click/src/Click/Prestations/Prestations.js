import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { Body } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class Prestations extends Component {

  render() {
    return (  
     
      <View style={{width:'100%',height:80}}> 
        <LinearGradient colors={['#91684a','#260033']}>
      <View style={{flexDirection:'row',height:70}}>
       {/* <Left>
      <Icon name='arrow-round-back' style={{ fontSize: 30 ,color:'#ffffff',paddingTop:10}} />
  </Left> */}
  
    <Body>
      <Text style={{ fontSize: 20, fontWeight: 'bold' ,paddingTop:15,color:'#ffffff',justifyContent:'center'}}>PRESANTATION</Text>
    </Body>
    </View></LinearGradient>
        
  </View>

    );
  }
}

