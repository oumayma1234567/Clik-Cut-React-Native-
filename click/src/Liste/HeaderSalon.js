import React, { Component } from 'react';
import { View,Text,ImageBackground,Image } from 'react-native';
import { CardItem, Left, Right, ListItem } from 'native-base';
import StarRating from 'react-native-star-rating';

export default class HeaderSalon extends Component {
 
  render() {
    return (
     <View>
         
          <ImageBackground source={require('../images/Accueil.png')} style={{height:200,width:'100%'}}>
          <View style={{ elevation: 3,borderWidth: 1}}>
   <CardItem   style={{flexDirection:'column'
   ,backgroundColor:'#ffffff',
   width:320,position:'absolute',top:140,left:20
   }}>

       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={{fontWeight:'bold',color:'black'}}>Le Salon</Text>
           <View style={{flexDirection:'row'}}>
    
            <StarRating
                disabled={true}
                maxStars={5}
                rating={4}
                starSize={15}
                fullStarColor='#eec60a'
                emptyStarColor='#eec60a'
                paddingLeft={20}

              />
       
       <Text style={{color:'#eec60a'}}>4.5</Text>
       </View>
       </View>
       <View style={{flexDirection:'row',position:'relative'}}>
           <Image source={require('../images/adress-icon.png')} style={{top:2,right:2}} />
           <Text>19 rue Pierre Julien,26200 Montélimar</Text>
       </View>

  </CardItem></View>
  </ImageBackground>
     </View>
    );
  }
}



