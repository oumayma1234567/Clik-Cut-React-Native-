
import React, { Component } from 'react';
import Lieu from './lieu/Lieu'
import Container from './lieu/Container';

export default class WelcomeLieu extends Component {
  constructor() {
    super();
    this.state = {
      title: 'hello',
     
    };
  }
  render() {
    return (<Container/> )
    
  }}

