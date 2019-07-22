import React, { Component } from 'react';
import { View, Image,TouchableOpacity,FlatList,Text,ScrollView} from 'react-native'
import CoiffureCardItem from './servicescarditem/CoiffureCardItem'

export default class Coiffure extends Component {

  render() {
    
    return ( 
 <View  style={{paddingTop:65}}>
 <ScrollView Vertical={true}> 
 <TouchableOpacity onPress={()=>this.props.navigation.navigate('WelcomeServices')}>
   <CoiffureCardItem
   imageUri={require('../../../images/img4.jpg')}
   name="Robin Pierlot"
   title="Disponible"
   heure="08:40-09:30,11:00-11:10"
   rating={4}
   avis='4.5'
   />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>this.props.navigation.navigate('WelcomeServices')}>
   <CoiffureCardItem
   imageUri={require('../../../images/img4.jpg')}
   name="Robin Pierlot"
   title="Disponible"
   heure="08:40-09:30,11:00-11:10"
   rating={4}
   avis='4.5'
   />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>this.props.navigation.navigate('WelcomeServices')}>
   <CoiffureCardItem
   imageUri={require('../../../images/img4.jpg')}
   name="Robin Pierlot"
   title="Disponible"
   heure="08:40-09:30,11:00-11:10"
   rating={4}
   avis='4.5'
   />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>this.props.navigation.navigate('WelcomeServices')}>
   <CoiffureCardItem
   imageUri={require('../../../images/img4.jpg')}
   name="Robin Pierlot"
   title="Disponible"
   heure="08:40-09:30,11:00-11:10"
   rating={4}
   avis='4.5'
   />
   </TouchableOpacity>

           {/* <FlatList
          data={CoiffureData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CoiffureCardItem coiffure={item} onPress={this.onServices.bind(this)}/>}
        /> */}
 
     <View style={{paddingTop:20}}> 
<View style={{backgroundColor:'#C29D73',height:50,alignItems:'center',paddingTop:12}}> 

    <Text style={{color:'#ffffff',textAlign:'center'}}>VOIR LA DESPONIBILITE</Text>
</View> 

</View>
</ScrollView>
 </View>
    );
  }
}