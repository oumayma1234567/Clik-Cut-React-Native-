import React, { Component } from 'react';
import { View} from 'react-native'
import { Container, Tab, Tabs } from 'native-base';
import Détails from './Liste/CardItem/Détails/Détails'
import Services from './Liste/CardItem/Services/Services';
import Annonces from './Liste/CardItem/Annonces/Annonces';
import Avis from './Liste/CardItem/Avis/Avis';
import FooterValider from './Liste/FooterValider';
import Gallerie from './Liste/CardItem/Gallerie/Gallerie';
import HeaderSalon from './Liste/HeaderSalon';
export default class ListeTabs extends Component {

  render() {
    return (    
      <Container>
   <HeaderSalon/>
        <Tabs>
          <Tab heading="Détails "  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581',fontSize:12}} activeTextStyle={{color: 'black', fontWeight: 'normal',fontSize:12}}>
            <Détails />
          </Tab >
          <Tab heading="Services "  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581',fontSize:12}} activeTextStyle={{color: 'black', fontWeight: 'normal',fontSize:12}}>
            <Services />
          </Tab>
          <Tab heading="Annonces "  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581',fontSize:12}} activeTextStyle={{color: 'black', fontWeight: 'normal',fontSize:12}}>
            <Annonces />
          </Tab>
          <Tab heading="Gallerie"  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581',fontSize:12}} activeTextStyle={{color: 'black', fontWeight: 'normal',fontSize:12}}>
            <Gallerie />
          </Tab>
          <Tab heading="Avis"  tabStyle={{backgroundColor: '#DEE0D5'}}activeTabStyle={{backgroundColor: '#DEE0D5'}} textStyle={{color: '#919581',fontSize:12}} activeTextStyle={{color: 'black', fontWeight: 'normal',fontSize:12}}>
            <Avis />
          </Tab>
        </Tabs>
        
      </Container>

    );
  }
}