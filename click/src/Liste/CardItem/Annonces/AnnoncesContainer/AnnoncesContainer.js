import React, { Component } from 'react';
import {  Container, Content, Card, CardItem, Body, Left, Right, Icon} from 'native-base';
import {Text} from 'react-native';

export default class AnnoncesContainer extends Component {
  render() {
    return (
      
          <Card>
              <CardItem style={{flex:1}}>
                  <Left>
                       <Text style={{color:'black'}}>{this.props.title}</Text>  
                       </Left>
                <Right>
                    <Text style={{color:'black'}}>{this.props.date}</Text>
                    </Right>
              </CardItem>
            <CardItem>
              <Body>
                <Text style={{color:'black',fontSize:12}}>{this.props.text1}</Text>
              </Body>
              </CardItem>
              <CardItem>
           
                  <Icon name="share" style={{color:'grey',marginLeft:300,fontSize:18}}>{this.props.itemIcon}</Icon>
             
            </CardItem>
          </Card>
      
   
    );
  }
}