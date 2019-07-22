import React, { Component } from 'react';
import { View,Text,ImageBackground,Image } from 'react-native';
import { CardItem, Left, Right, ListItem, Icon } from 'native-base';


export default class HeaderServices extends Component {
 
  render() {
    return (
     <View style={{width:'100%'}}>
         
          <ImageBackground source={require('../../../images/Accueil.png')} style={{height:200,width:'100%'}}>
          <View style={{ elevation: 3,borderWidth: 1}}>
   <ListItem   style={{flexDirection:'column',backgroundColor:'#ffffff',
   width:'100%',position:'absolute',top:130,
   }}>

           <Text>Service Sélectionné :</Text>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{fontSize:15,color:'black'}}>Coupe Homme</Text>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:15,color:'black'}}>12,35</Text>
         <Icon name="logo-euro" style={{paddingLeft:5,fontSize:12,paddingTop:5,color:'black'}}/>
         </View>
       </View>

  </ListItem></View>
  </ImageBackground>
     </View>
    );
  }
}



