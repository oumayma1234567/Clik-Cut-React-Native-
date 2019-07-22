import React from 'react';
import { TouchableOpacity, Text,StyleSheet} from 'react-native';


const Card = (props) => {
  return (
    <View>
      {props.children}
    </View>
  );
}
const styles = StyleSheet.create({
CardStyles:{
  borderBottomWidth: 0,
  borderBottomColor: 'black',
  marginRight:5,
  marginLeft:5,
  borderWidth:1
}
})

export { Card };