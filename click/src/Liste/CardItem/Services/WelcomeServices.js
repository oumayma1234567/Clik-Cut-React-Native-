
import React, { Component } from 'react';
import CoiffeurSelection from './CoiffeurSelectione'

export default class WelcomeServices extends Component {
    constructor() {
        super();
        this.state = {
          title: 'hello',
         
        };
      }
  render() {
    return (<CoiffeurSelection/> )
  }}

