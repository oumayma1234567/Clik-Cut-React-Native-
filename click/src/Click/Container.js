import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput,Image} from 'react-native';


export default class Container extends Component {
  render() {
    return (  
        <View style={{alignItems:'center'}} >
          <Image  source={require('../images/logo.png')}/>
          <View>
            <Text>L'application qui facilite la prise </Text>
             <Text> de rendez-vous chez le coiffeur</Text>
          </View>
      </View>
    );
  }
}