
import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Tabs from '../TabsHome'
import Home from '../Home';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header:null
  };
  constructor() {
    super();
    this.state = {
      title: 'hello',
     
    };
  }
  render() {
    return (<Home/> )
    
  }}

