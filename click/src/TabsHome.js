import React, { Component } from 'react';
import { Container, Tab, Tabs,Icon, TabHeading , Text, Content} from 'native-base';
import {View} from 'react-native'
import Carte from './Carte/Carte'
import Liste from './Liste/Liste';
import Filter from './Filter/Filter';
import CardItemNavigation from './Liste/CardItemNavigation';
import LinearGradient from 'react-native-linear-gradient';

export default class TabsHome extends Component {
  
  render() {
    // var navigate= this.props.navigate//
    return (
 
      <Container>
         <LinearGradient colors={['#492711','#260033']}>
        <Tabs  tabBarUnderlineStyle={{borderBottomWidth:2}}  >
          <Tab  
          heading="Carte" 
          tabStyle={{backgroundColor: '#7c5441'}}activeTabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#7c5441', fontWeight: 'normal'}}  
         >
            <Carte />
          </Tab>
          <Tab
           heading="Liste" 
          tabStyle={{backgroundColor: '#7c5441'}}activeTabStyle={{backgroundColor: '#ffffff'}} textStyle={{color: '#ffffff'}} activeTextStyle={{color: '#7c5441', fontWeight: 'normal'}}>
              <CardItemNavigation/>
          </Tab>
         
        </Tabs>
</LinearGradient>
      </Container>
      
        
    );
  }
}