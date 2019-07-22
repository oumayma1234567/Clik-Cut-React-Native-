import React, { Component } from 'react';
import { Text, View,Image,ScrollView } from 'react-native';
import { CardItem,} from 'native-base';




export default class Gallerie extends Component {
  render() {
    return (  
      <View>
        <View>
              <Text style={{textAlign:'center'}}>GALLERIE</Text>
        </View>
        <ScrollView  Vertical={true}>
        <CardItem >
         <View style={{flexDirection:'row',position:'relative',left:5}}>
     <Image source={require('../../../images/img1.jpg')} style={{ width:100,height:100}}/>
     <Image source={require('../../../images/img2.jpg')} style={{width:100,height:100}}/>
    <Image source={require('../../../images/img3.jpg')} style={{width:100,height:100}}/>
   </View>
     </CardItem>
     <CardItem>
         <View style={{flexDirection:'row'}}>
     <Image source={require('../../../images/img4.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     <Image source={require('../../../images/img5.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     <Image source={require('../../../images/img6.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     </View>
     </CardItem>
     <CardItem>
         <View style={{flexDirection:'row'}}>
     <Image source={require('../../../images/img7.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     <Image source={require('../../../images/img8.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     <Image source={require('../../../images/img9.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     </View>
     </CardItem>
     <CardItem>
         <View style={{flexDirection:'row'}}>
     <Image source={require('../../../images/img10.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     <Image source={require('../../../images/img11.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     <Image source={require('../../../images/img12.jpg')} style={{paddingLeft:12,width:100,height:100}}/>
     </View>
     </CardItem>
     </ScrollView>
  </View>

    );
  }
}

