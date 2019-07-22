
import React, { Component } from 'react';
import {View,ImageBackground,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import {Button,Inputs,ConxButton,Inscrire,Style ,Forget}from './AuthForm'

export default class SignInScreen extends Component {
  static navigationOptions = {
    header:null
  };
  constructor() {
    super();
    this.state = {
      title: 'login',
     
    };
  }
  onLoginPressed(){
    this.props.navigation.navigate('WelcomeScreen',this.state.title);
  }
  onInscrit(){
    this.props.navigation.navigate('SignUp',this.state.title);
  }
  render() {
    return (
<View >
{/* <ImageBackground
          source={require('../images/splash.png')} style={styles.backgoundContainer}
        > */}
        <View style={{paddingTop:50,paddingLeft:25}}>
        <Image  source={require('../images/logo.png')}/>
        <Text style={{fontSize:30,color:'black'}}>Se connecter</Text>
        </View>
        <View style={styles.container}>
<Inputs/>
<View style={{flexDirection:'row',justifyContent:'space-around'}}>
<Forget/>
<View>
  <Button
  onPress={this.onLoginPressed.bind(this)}
  >SE CONNECTER</Button>
  </View>
  </View>
  <Style/>
  <ConxButton/>
  <View>
    <TouchableOpacity onPress={this.onInscrit.bind(this)} >
  <Inscrire></Inscrire>
  </TouchableOpacity>
</View>
  {/* </ImageBackground> */}
</View></View>
    )
  }}
  const styles = StyleSheet.create({
    container:{
      
      flex:1,
    
      marginTop:'30%'
    },
    backgoundContainer:{
      flex:1,
      width: null,
      height: null,
    }
    })


