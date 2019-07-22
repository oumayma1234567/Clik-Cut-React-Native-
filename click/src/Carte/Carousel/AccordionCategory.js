import React, { Component } from "react";
import { Accordion, Text, View, CardItem } from "native-base";
import ToutsCategories from './ToutsCategories'
import{Image} from 'react-native'
const dataArray = [
  { image: require('../../images/coupehomme.jpg'), title: 'COUPE HOMME', content: "" },
  { image: require('../../images/coiffure.jpg'), title: 'COIFFURE', content: "" },
  { image: require('../../images/visage.jpg'), title: 'VISAGE', content: "" },
  { image: require('../../images/epilation.jpg'), title: 'EPILATION', content: "" }
];

export default class AccordionCategory extends Component {
    _renderHeader(item) {
        return (
            <CardItem >
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center" ,
                backgroundColor: "#A9DAD6" ,
                width:'100%'}}>
                <View style={{position:'relative',paddingTop:15,paddingLeft:15}}>
                <Image source={item.image} style={{width:150,height:150}} />
                </View>
              <Text style={{ fontWeight: "600" ,color:'#ffffff',fontSize:20}}>
                  {" "}{item.title}
                </Text>
              </View>
    </CardItem>

        );
      }
  _renderContent(item) {
    return (
      <View >
        <ToutsCategories > {item.content}</ToutsCategories>
      </View>
    );
  }
  render() {
    return (
           <View style={{width:'100%'}}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
       </View>
    );
  }
}
