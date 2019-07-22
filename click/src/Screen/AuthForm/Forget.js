import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';


const Forget = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.TextStyles}>
      Mot de passe oublié ?
      </Text>
 </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TextStyles:{
    color:'black',
    marginTop: 20,
  },
})

export { Forget };