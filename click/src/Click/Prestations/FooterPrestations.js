import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import { CardItem, Card,Icon,Footer, Left, Body } from 'native-base';



export default class FooterPrestations extends Component {
  render() {
    return (  
      <View style={{paddingTop:45}} >
      <Footer style={{backgroundColor:'#C29D73'}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{color:'#ffffff'}}>ENREGISTER</Text>
        </View></Footer></View>

    );
  }
}

