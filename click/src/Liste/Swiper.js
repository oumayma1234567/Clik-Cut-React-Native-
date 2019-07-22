import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
import { Image, View} from 'react-native';
export default class Swiper extends Component {
  render() {
    return (
      
          <Swiper autoplay= {true} 
          style={{heigth:100}}>
             <View style={{flex:1}}>
             <Image source={require('../images/SALON1.png')} style={{flex:1,height:null,width:null,resizeMode:'contain'}}/>
            </View> 
            <View style={{flex:1}}>
            <Image source={require('../images/SALON1.png')} style={{flex:1,height:null,width:null,resizeMode:'contain'}} />
            </View>  
            <View style={{flex:1}}>
            <Image source={require('../images/SALON1.png')} style={{flex:1,height:null,width:null,resizeMode:'contain'}}/>
            </View>  
            <View style={{flex:1}}>
            <Image source={require('../images/SALON1.png')} style={{flex:1,height:null,width:null,resizeMode:'contain'}}/>
            </View>   
          </Swiper>
     
    );
  }
}