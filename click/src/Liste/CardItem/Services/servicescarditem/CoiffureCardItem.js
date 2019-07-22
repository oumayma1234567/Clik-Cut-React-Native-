import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { CardItem, Card, } from 'native-base';
import StarRating from 'react-native-star-rating';

const Button = (props) => {

  return (
    <View style={{width:390,paddingLeft:30}}>
        <Card>
     <CardItem >
       <View style={{flexDirection:'row'}}>
       <Image source={props.imageUri} style={{left:5,top:10,borderRadius:80,width:50,height:50}} />
       <View style={{flexDirection:'column',margin:10}}>
       <Text style={{color:'black',fontWeight: 'bold'}}>{props.name}</Text>
       <View style={{flexDirection:'row'}}>
         <Text>{props.title}</Text>
         <Text style={{paddingLeft:5}}>{props.heure}</Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <StarRating
                disabled={true}
                maxStars={5}
                rating={props.rating}
                starSize={15}
                fullStarColor='#eec60a'
                emptyStarColor='#eec60a'
                paddingLeft={20}

              />
              <Text style={{color:'#eec60a',paddingLeft:5}}>{props.avis}</Text>
       </View>
       </View>
       </View>
     </CardItem>
     </Card></View>
    );
    }
    export default Button
