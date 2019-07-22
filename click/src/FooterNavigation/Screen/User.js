
import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import TabsHome from '../../TabsHome';

export default class Uesr extends Component {
    static navigationOptions = {
      tabBarIcon:({tintColor})=>(<Icon name="person"  style={{color: 'gray',fontSize:35}} />)
      };
  render() {
    return (
        <View style={styles.container}>
       
      </View>
    )
  }}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'
    }
});