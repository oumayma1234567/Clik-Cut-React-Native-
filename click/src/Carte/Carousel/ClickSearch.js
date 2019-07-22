import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Button = (props) => {
    return (
        <LinearGradient colors={['#91684a','#260033']} style={{borderRadius:40,width:50,height:50}}>
        <TouchableOpacity>
         <View style={{borderRadius:40,width:50,height:50}}> 
      <Image source={require('../../images/search-icon.png')} style={{top:15,left:18,width:20,height:20}} />
     </View>
    </TouchableOpacity> 
    </LinearGradient>
    );
    }
    export default Button
