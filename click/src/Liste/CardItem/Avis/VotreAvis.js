import React from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';
export default class VotreAvis extends React.Component {
  render() {
    return (    
      <View style={{paddingLeft:20}}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>Votre Avis</Text>
      <Text style={{ color: "#eec60a"}}>★★★★✩</Text>
      <View>
          <Text>Votre Nom*</Text>
          <TextInput  placeholder='Nom' style={{borderBottomColor:'black',borderWidth:0.5}} />
          <Text>Adresse Email*</Text>
          <TextInput  placeholder='Email' style={{borderBottomColor:'black',borderWidth:0.5}}/>
          <Text>Votre Avis*</Text>
          <TextInput  placeholder='Avis' style={{borderBottomColor:'black',borderWidth:0.5}} />
      </View>
<View style={{paddingTop:10}}>
      <TouchableOpacity style={{backgroundColor:'#C29D73',height:35}}>
               <Text style={{textAlign:'center',paddingTop:10}} > ENVOYER </Text>
                </TouchableOpacity>
    </View>
</View>
    );
  }
}

