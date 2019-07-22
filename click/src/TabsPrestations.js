import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import Femme from './Click/Prestations/Femme'
import Homme from './Click/Prestations/Homme'
import Enfant from './Click/Prestations/Enfant'
import Prestations from './Click/Prestations/Prestations';
import FooterPrestations from './Click/Prestations/FooterPrestations';
import Shearch from './Click/Prestations/Shearch';
export default class TabsPrestations extends Component {
  render() {
    return (
       
      <Container>
        <Shearch/>
        <Tabs>
          <Tab heading="Femme "  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
            <Femme />
          </Tab >
          <Tab heading="Homme "  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
            <Homme />
          </Tab>
          <Tab heading="Enfant "  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
            <Enfant />
          </Tab>
        </Tabs>
        <FooterPrestations/>
      </Container>

    );
  }
}