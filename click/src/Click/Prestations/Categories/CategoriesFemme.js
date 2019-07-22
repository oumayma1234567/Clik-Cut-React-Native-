import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import { CardItem, Card,Icon,Footer, Left, Body, Container, Content ,ListItem, Right} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class CategoriesFemme extends Component {
  render() {
    return (  
<Card style={{width:'90%'}}>
            <CardItem style={styles.femme}>
            <Body style={styles.liste}>
            <Image  style={{left:20,right:20,height:30,width:30}}source={this.props.imageUri}/>
              <Text style={{paddingLeft:40}} > {this.props.text}</Text>
              <Right>
              <Icon active name="arrow-forward"   >{this.props.itemIcon1}</Icon>
              </Right>
            </Body>
              </CardItem>
   </Card>
      );
    }
        
    }
    const styles = StyleSheet.create({
        liste:{
          flexDirection: "row",
          position:'relative'
          },
      })





