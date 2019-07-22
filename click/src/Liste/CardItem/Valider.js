import React, { Component } from 'react';
import { Left,CardItem,Card, Right,Icon,Button, ListItem} from 'native-base';
import { Text, View,ImageBackground } from 'react-native';
import StarRating from 'react-native-star-rating';




export default class Valider extends Component {
  render() {
    return (
      <Card >
         <View>
        
         <CardItem>
       <Left>
         <View style={{flexDirection:'column'}}>
         <View style={{flexDirection:'row'}}>
       <Text style={{fontWeight: 'bold',fontSize:20}}>{this.props.itemPrice}</Text>
       <Icon name="logo-euro" style={{color:'grey',fontSize:20,fontWeight: 'bold',paddingTop:5}}>{this.props.itemIcon1}</Icon>
       <Text style={{fontWeight: 'bold',fontSize:20,paddingLeft:15}} >{this.props. heure}</Text>
       <Icon name="time" style={{color:'grey',fontSize:20,fontWeight: 'bold',paddingTop:5,paddingLeft:5}}>{this.props.itemIcon2}</Icon>
       </View>
       
 <View style={{flexDirection:'row'}}>
       <StarRating 
       disabled={true}
       maxStars={5}
       rating={this.props.rating}
       starSize={20}
       fullStarColor='orange'
       emptyStarColor='orange'
       />
       
       <Text>{this.props.avis}</Text>
       </View>
       </View>
       </Left>
 
    <Right>
           <Button success>
            <Text style={{color:"white" , width:200,
        height:50,textAlign:'center',paddingTop:12,fontSize:20
      }}>{this.props.button}</Text>
          </Button>
           </Right>
      </CardItem></View>
     </Card>
   
    );
  }
}