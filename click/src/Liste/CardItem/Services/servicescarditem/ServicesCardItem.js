import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { CardItem, Right, Card, Icon } from 'native-base';

export default class ServicesCardItem extends React.Component {
  render() {
    return (
    
          <View>
        <CardItem style={{position:'relative'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text>{this.props.text1}</Text>
                <Right>
                <Text>{this.props.text2} </Text>
                </Right>
                <Image  source={this.props.imageUri1} style={{top:2,left:5}} />
            </View>
            </CardItem>
            <CardItem style={{paddingBottom:20}}>
                <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'row'}}>
            <Image  source={this.props.imageUri2} style={{top:2,right:5}} />
            <Text >{this.props.heure}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Image  source={this.props.imageUri3} style={{top:2,right:5,left:5}} />
            <Text style={{paddingLeft:10}}>{this.props.text3}</Text>
            <Right>
                <View style={{flexDirection:'row'}}>
            <Text>{this.props.prix}</Text>
            <Icon name="logo-euro" style={{paddingLeft:5}}>{this.props.itemIcon}</Icon>
            </View>
            </Right>
            </View>
            </View>
        </CardItem>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
