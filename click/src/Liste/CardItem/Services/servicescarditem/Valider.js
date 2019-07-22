import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default class Valider extends Component {
  render() {
    return (  
      <View style={{justifyContent:'flex-end'}}> 
<View style={{backgroundColor:'#C29D73',height:50,paddingTop:12}}>
              <Text style={{color:'#ffffff',textAlign:'center'}}>VALIDER</Text>
</View>
</View>
    );
  }
}

