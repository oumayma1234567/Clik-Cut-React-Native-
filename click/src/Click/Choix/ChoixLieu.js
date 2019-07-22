import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { CardItem, Card } from 'native-base';



const Button = (props) => {
    return (  
        <TouchableOpacity onPress={props.onPress}>
    <Card>
        <CardItem style={{flexDirection:'column',alignItems:'center',position:'relative'}}>
         <View>
         <View>
            <Image  source={require('../../images/Lieu.png')}/>
            </View>
            <View>
             <Text style={{paddingLeft:15}}>Ou? ></Text>
             </View>
             </View>
        </CardItem>
    </Card>
    </TouchableOpacity>
    );
  }
  export default Button

