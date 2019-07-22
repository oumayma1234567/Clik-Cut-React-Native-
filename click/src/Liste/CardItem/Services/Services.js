import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SalonServices from './SalonServices'
import NavigationServices from './NavigationServices'
import CategoriesServices from './CategoriesServices';

import AccordionExemple from './servicescarditem/AccordionExepmle';

export default class Services extends React.Component {
  render() {
    return (
    <NavigationServices/>
        // <CategoriesServices/> 
        // <AccordionExemple/> 
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
