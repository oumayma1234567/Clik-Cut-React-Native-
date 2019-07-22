import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const Style = () => {
  return (
 <View style={{marginTop:20,marginBottom:10 ,flexDirection:'row'} }>
       <View style={{paddingTop:10}}>
     <Text style={{borderLeftWidth:125,height:1}}></Text>
     </View>
     <View>
    <Text >SE CONNECTER VIA</Text>
    </View>
    <View style={{paddingTop:10}}>
    <Text style={{borderRightWidth:140,height:1}}></Text>
    </View>
 </View>
  )
}


export { Style };