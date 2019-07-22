import React, { Component } from 'react';
import {View} from 'react-native';
import { Button } from './Common/Button';
export default class Search extends Component {
  static navigationOptions = {
    header:null
  };
  constructor() {
    super();
    this.state = {
      title: 'login',
     
    };
  }
  onLoginPressed(){
    this.props.navigation.navigate('Accordion',this.state.title);
  }
  render() {
    return (
<View>

  <Button
  onPress={this.onLoginPressed.bind(this)}
  >Login</Button>
</View>
    )
  }}
