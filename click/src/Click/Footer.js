import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon,Footer} from 'native-base'

const Button = (props) => {
  return (
      <TouchableOpacity>
        <View style={{paddingTop:40}} >
        <Footer style={{backgroundColor:'#C29D73'}}>
          <View style={{justifyContent:'center'}}>
              <Text style={{color:'#ffffff'}}>RECHERCHER</Text>
          </View></Footer></View>
          </TouchableOpacity>
 );
}
export default Button

