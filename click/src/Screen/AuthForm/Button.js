import React from 'react';
import { TouchableOpacity, Text,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = (props) => {
  return (
    <LinearGradient colors={['#91684a','#260033']} style={styles.Button}>
    <TouchableOpacity onPress={props.onPress} style={styles.Button}>
      <Text style={styles.TextStyles}>
       {props.children}
      </Text>
    </TouchableOpacity>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
Button:{
  width: 140,
  height: 45,
  borderRadius:40
},
TextStyles:{
  paddingTop:12,
  justifyContent:'center',
  alignSelf:'center',
  fontSize:15,
 color:'#ffffff'
}
})

export { Button };