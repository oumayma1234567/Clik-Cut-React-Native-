import React from 'react';
import { TouchableOpacity, View,Text,StyleSheet} from 'react-native';


const Inscrire = (props) => {
  return (
    
      <View style={{flexDirection:'row',paddingTop:20,justifyContent:'center'}}>
      <View>
      <Text>PAS ENCORE DE COMPTE?</Text>
      </View>
      <View>
      <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.TextStyles}>
      S'INSCRIRE
      </Text>
 </TouchableOpacity>
 </View>
  </View>
  );
}
const styles = StyleSheet.create({

TextStyles:{
        color: 'black',
        paddingLeft:5
    
}
})

export { Inscrire };