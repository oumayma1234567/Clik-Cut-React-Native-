import React, { Component } from 'react';
import { Left, CardItem, Card, Right, Icon, Body } from 'native-base';
import {ImageBackground,Text,View} from 'react-native'

import StarRating from 'react-native-star-rating';




export default class RecommendedCardItem extends Component {
  render() {
    return (
      <Card style={{height:'28%'}}>

        <CardItem>

          <ImageBackground style={{ height: 180, width: 370, borderRadius: 20 }}
            source={this.props.imageUri}
          >
            <Body style={{ alignItems: 'flex-end', paddingRight: 10, paddingTop: 10 }}>
              <Icon name="heart-empty" style={{ color: '#ffffff' }}>{this.props.itemIcon1}
              </Icon>
            </Body>
          </ImageBackground>
        </CardItem>
<CardItem style={{flexDirection:'row'}}>
          <Body>
            <Text style={{
              fontSize: 22,
              fontWeight: 'bold', paddingLeft: 5,
              color:'#42361E'
            }}>{this.props.itemName}</Text>
</Body>
<View style={{paddingRight:12}}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={this.props.rating}
                starSize={20}
                fullStarColor='orange'
                emptyStarColor='orange'

              /></View></CardItem>
              <CardItem style={{ flexDirection: 'row' }}>
              <Body style={{ flexDirection: 'row' }} >
              <Icon name="pin" style={{ color: 'grey',paddingLeft: 5 }}>{this.props.itemIcon2}</Icon>
              <Text style={{ fontSize: 17 ,paddingLeft:10}}>{this.props.ItemDistance}</Text>
            </Body> 
            <View>
              <Text style={{ fontSize: 17 ,paddingRight:12}}>{this.props.avi}</Text>
             </View>
              </CardItem>
              <CardItem style={{ flexDirection: 'row',paddingBottom:80}}>
              <Body style={{ flexDirection: 'row'}}>
              <Text style={{ fontSize: 17, color: '#3B0520', paddingLeft:5}}>{this.props.itemPrice}</Text>
              <Icon name="logo-euro" style={{ fontSize: 17, color: '#3B0520',paddingLeft:10,paddingTop:3}}>{this.props.itemIcon3}</Icon> 
              </Body>
              <View style={{ flexDirection: 'row'}}>
              <Text style={{ fontSize: 17 }}>{this.props.heure}</Text>
              <Icon name="time" style={{ color: 'grey' ,paddingLeft:10}}>{this.props.itemIcon4}</Icon>
            </View>
           
              </CardItem>
            
      </Card>

    );
  }
}