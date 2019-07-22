import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { CardItem, Card } from 'native-base';



const Button = (props) => {

    return (  
        <TouchableOpacity onPress={props.onPress}>
    <Card style={styles.containerStyle}>
        <CardItem style={{flexDirection:'column',alignItems:'center',position:'relative'}}>
         <View>
         <View style={{paddingLeft:50}}>
            <Image  source={require('../../images/Prestations.png')}/>
            </View>
            <View>
             <Text style={{paddingLeft:15}}>Quelles Prestations? ></Text>
             </View>
             </View>
        </CardItem>
    </Card>
    </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    containerStyle: {
      justifyContent: 'center',
      shadowColor: '#000000',
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 1,
      borderRadius: 50,
      shadowOffset: {
        width: 0,
        height: 3
      },
      
    
    }
  })
  export default Button