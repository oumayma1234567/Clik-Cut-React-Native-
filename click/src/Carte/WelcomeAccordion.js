
import React, { Component } from 'react';

import {View,Text} from 'react-native'
import AccordionCategory from './Carousel/AccordionCategory'
export default class WelcomeAccordion extends Component {
    constructor() {
        super();
        this.state = {
          title: 'hello',
         
        };
      }
  render() {
    return (
      <View>
        <AccordionCategory/>
      </View>
     )
  }}

