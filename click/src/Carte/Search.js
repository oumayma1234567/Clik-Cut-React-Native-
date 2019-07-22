import React, { Component } from 'react';
import { View,TextInput ,Image,TouchableOpacity } from 'react-native';
import ClickSearch from './Carousel/ClickSearch'
export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      title: 'Search',
     
    };
  }
  onSearch(){
    this.props.navigation.navigate('WelcomeAccordion',this.state.title);
  }
  render() {
    return (
     <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View >
        <TextInput placeholder="Coiffure Homme" style={{width:250,borderRadius:40,borderBottomColor:'black'}}/>
        </View> 
         <View style={{position:'relative',paddingLetf:15}} >
     
      </View>
      
        <ClickSearch onPress={this.onSearch.bind(this)}/>
      </View>
    );
  }
}
