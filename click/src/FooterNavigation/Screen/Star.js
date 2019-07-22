
import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button ,Icon} from 'native-base';

export default class Star extends Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(<Icon name="star"  style={{color: 'gray',fontSize:35}} />)
        };
  render() {
    return (
        <View style={styles.container}>
            <Text>Star</Text>
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
