import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import {Icon,Footer  } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class Lieu extends Component {
  render() {
    return (  
      <View>
    <View >
        <TextInput placeholder="Rue,ville,code postal" style={{flexDirection:'row',  
        borderBottomWidth: 1,
       paddingLeft:25
       }}/>
</View>
{/* <LinearGradient colors={['#91684a','#260033']}> */}
<View style={{flexDirection:'row'}}>
<Icon name='arrow-round-up' style={{ fontSize: 30 ,paddingLeft:10,color:'#C29D73'}} />

<Text style={{paddingLeft:10,color:'#C29D73'}}>Ma Position actuelle</Text>
</View>
{/* </LinearGradient> */}
    <View style={{paddingTop:200}} >
      <Footer style={{backgroundColor:'#C29D73'}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{color:'#ffffff'}}>ENREGISTER</Text>
        </View></Footer></View>
</View>

    );
  }
}

