import React from 'react';
import { Text,StyleSheet,TextInput,View} from 'react-native';
import { Icon} from 'native-base';


const Inputs = () => {
  return (
  <View style={{paddingBottom:30,paddingLeft:30}}>
    <View style={{flexDirection:'row',  
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 340,
        height: 50,}}>
      
       <Icon name='person' style={{ fontSize: 20,paddingTop:15}} />
        
   <TextInput placeholder="Nom Complet"
/>

</View>
<View style={{flexDirection:'row',  
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 340,
        height: 50,}}>
<View >
   <Icon name='lock' style={{ fontSize: 20,paddingTop:15}}  />
    </View>
    <View>
 <TextInput secureTextEntry={true}
placeholder="Mot de passe"
/>
</View>
</View>
  </View>
  )
}
const styles = StyleSheet.create({
InputStyle:{
  fontSize: 20,
  width: 200,
  height: 100,
  borderBottomWidth: 1,
  borderBottomColor: 'black',
  

}
})

export { Inputs};