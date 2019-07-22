
import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button ,Icon} from 'native-base';
import TabsHome from '../../TabsHome';

export default class Store extends Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(<Icon name="home"  style={{color: 'gray',fontSize:35}} />)
        };
  render() {
    //var navigate= this.props.navigation
    return (
        <View style={styles.container}>
            <TabsHome />
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