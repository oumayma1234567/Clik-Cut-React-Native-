import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import CoiffureCardItem from './servicescarditem/CoiffureCardItem'
import DateRendezVous from './servicescarditem/DateRendezVous';
import Valider from './servicescarditem/Valider';

export default class CoiffeurSelectione extends Component {

  render() {
    return (  
      <View style={{paddingTop:90}}>
       <ScrollView Vertical={true}> 
        <Text style={{fontStyle:'italic',fontWeight:'bold',fontSize:20,color:'black'}}>Coiffeur sélèctionné: </Text>
   <CoiffureCardItem
   imageUri={require('../../../images/img4.jpg')}
   name="Robin Pierlot"
   title="Disponible"
   heure="08:40-09:30,11:00-11:10"
   rating={4}
   avis='4.5'
   />
  <View><DateRendezVous/></View>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AutresServices')}>
    <View style={{justifyContent:'flex-end'}}> 
<View style={{backgroundColor:'#C29D73',height:50,paddingTop:12}}>
              <Text style={{color:'#ffffff',textAlign:'center'}}>VALIDER</Text>
</View>
</View>
  </TouchableOpacity>
  </ScrollView>
</View>

    );
  }
}

