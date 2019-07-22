import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon  } from 'native-base';

import Footer from './Footer'
import Container from './Container'
import ChoixDate from './Choix/ChoixDate'
import ChoixLieu from './Choix/ChoixLieu'
import ChoixPrestations from './Choix/ChoixPrestations'

export default class Click extends Component {
    static navigationOptions = {
        header:null
      };
      constructor() {
        super();
        this.state = {
          title: 'click',
         
        };
      }
      
      onDate(){
        this.props.navigation.navigate('WelcomeDate',this.state.title);
      }
      onLieu(){
        this.props.navigation.navigate('WelcomeLieu',this.state.title);
      }
      onPrestations(){
        this.props.navigation.navigate('WelcomePrestations',this.state.title);
      }
      onPressedNavigation=()=>{
        // const {navigate}= this.props.navigate
        this.props.navigation.navigate('AuthLoadingSreen');
      }
  render() {
    return (  
     <View >
     <View>
  <LinearGradient colors={['#91684a','#260033']}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:55}}>
        <View>
     
          <Icon name='menu' style={{ fontSize: 30 ,color:'#ffffff'}} />

        </View>
       
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'#ffffff'}}>Click&Cut</Text>
        </View>
        <View>
          <TouchableOpacity  onPress={this.onPressedNavigation}>
          <Icon name='arrow-forward' style={{ fontSize: 30 ,color:'#ffffff'}} />
          </TouchableOpacity>
      </View>
      
      </View>
      </LinearGradient>
</View>

    <Container/>
    <ChoixDate onPress={this.onDate.bind(this)}/>
    <ChoixLieu onPress={this.onLieu.bind(this)}/>
    <ChoixPrestations onPress={this.onPrestations.bind(this)}/>
    <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

})