import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Card,CardItem, Left} from 'native-base'
import StarRating from 'react-native-star-rating';
export default class CardAvis extends React.Component {
  render() {
    return (
        <CardItem style={{position:'relative',paddingTop:10,height:100}}>
        <View style={{flexDirection:'row'}}>  
            <Image source={this.props.imageUri} style={{left:5,borderRadius:80,width:50,height:50}} />
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{paddingLeft:10,color:'#1ec0ff'}}>{this.props.text}</Text>
                <Text style={{paddingLeft:16}}>{this.props.date}</Text>
                <Text style={{paddingLeft:20}}>{this.props.heurs}</Text>
                <StarRating
                disabled={true}
                maxStars={5}
                rating={this.props.rating}
                starSize={15}
                fullStarColor='#eec60a'
                emptyStarColor='#eec60a'
                paddingLeft={20}

              />
            </View>
           <Text style={{paddingLeft:10}}>{this.props.text1}</Text>
           <Text style={{paddingLeft:10,paddingBottom:10}}>{this.props.text2}</Text>
           </View></View>
        </CardItem>

    );
  }
}

