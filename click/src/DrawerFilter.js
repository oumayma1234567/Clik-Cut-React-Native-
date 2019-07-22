import React, { Component } from 'react';
import { View,StyleSheet,Image,Text} from 'react-native';
import { Content, Container, Footer } from 'native-base';
import Categories from './DrawerFilter/Categories';
import Prix from './DrawerFilter/Prix';
import Note from './DrawerFilter/Note';
import Offres from './DrawerFilter/Offres';
import LinearGradient from 'react-native-linear-gradient';

export default class DrawerFilter extends Component {
    render(){
        return(
   
            <Container>
            <Content style={{flex:1}}>
            <LinearGradient colors={['#91684a','#260033']} style={{height:60}}>
               <View style={{flexDirection:'row',justifyContent:'space-around',position: 'relative'}} >
               <Image source={require('./images/Reset.png')} style={{top:20}}/>
               <Text style={{paddingTop:10,fontSize:20}}>Filtres</Text>
               <Image source={require('./images/checked.png')} style={{top:20}}/>
               </View>
               </LinearGradient>
              <Categories/>
              <Prix/>
              
              <Note/>
            <Offres/>
            <View style={{paddingTop:25}}>
            <Footer style={{backgroundColor:'#C29D73'}}>
              <View style={{justifyContent:'center'}}>
                  <Text style={{color:'#ffffff'}}>APPLIQUER</Text>
              </View></Footer></View>
               </Content>
    </Container>

    );
}
    
}
