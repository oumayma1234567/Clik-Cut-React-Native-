import React, { Component } from 'react';
import { Left,CardItem,Card, Right,Icon,Body,Button, View} from 'native-base';
import { Text} from 'react-native';



export default class Container extends Component {
  render() {
    return (
      <Card style={{height:'25%'}}>
        <CardItem style={{flexDirection:'column'}}> 
  
      <Text style={{fontSize:18,color:'black', fontWeight: 'bold'}}>DESCRIPTION</Text>
        
           <Text style={{fontSize:12,color:'black'}}>Situé en plien coeur de la ville,LE SALON afficher une
   decoration contemporaine dans un immeuble de 
   caractere disponsant d'un mobilier confortable Made in 
   France,alliant bois, cuir et pierres.Autour d'un concept 
   unique, La proposition des prestaion prodiguées pour 
   l'embellissement de la personne,reste priorité avec 
   un savoir-faire sur mesure
</Text>
       </CardItem>
     </Card>
   
    );
  }
}