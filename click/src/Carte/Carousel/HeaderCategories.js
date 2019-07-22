import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class HeaderCategories extends Component {
  render() {
    return (
        <View style={{width:'100%',height:'100%'}}> 
       <LinearGradient colors={['#91684a','#260033']}>
       <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View>
          <Icon name='bars' style={{ fontSize: 30 ,color:'#ffffff',paddingTop:10}} />
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,paddingTop:10,color:'#ffffff'}}>CATEGORIES</Text>
        </View>
        <View>
          <Icon name='filter' style={{ fontSize: 30 ,color:'#ffffff',paddingTop:10}} />
        </View>
        </View>
        </LinearGradient>
      
      </View>
    );
  }
}
