import React, { Component } from 'react';
import { View,Text,Image} from 'react-native';
import { Card, CardItem,Icon } from 'native-base';

export default class Categories extends Component {
    render(){
        return(
          
 <View>
     <CardItem style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{color:'#C29D73'}}>
          Categories
         </Text>
         <Icon active name="arrow-forward" style={{color:'#C29D73'}}/>
     </CardItem>
     <CardItem>
         <View style={{flexDirection:'row'}}>
     <Image source={require('../images/tout.png')} style={{paddingLeft:12}}/>
     <Image source={require('../images/homme.png')} style={{paddingLeft:12}}/>
     <Image source={require('../images/coiffure.png')} style={{paddingLeft:12}}/>
     <Image source={require('../images/massage.png')} style={{paddingLeft:12}}/>
     </View>
     </CardItem>
     <CardItem>
     <View style={{flexDirection:'row',}}>
     <Image source={require('../images/EPILATION.png')} style={{paddingLeft:10}}/>
     <Image source={require('../images/visage.png')} style={{paddingLeft:10}}/>
     <Image source={require('../images/corps.png')} style={{paddingLeft:10}}/>
     <Image source={require('../images/mains.png')} style={{paddingLeft:10}}/>
     </View>
     </CardItem>
     </View>



    );
}
    
}
