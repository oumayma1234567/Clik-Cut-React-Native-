import React, { Component } from 'react';
import {Text, View ,ScrollView} from 'react-native';
import AnnoncesContainer from './AnnoncesContainer/AnnoncesContainer';

export default class Annonces extends Component {

  render() {
    return (
     <View >
          <ScrollView Vertical={true}> 
       <AnnoncesContainer
       title="SPECIAL NOEL"
       date="16/12/2018"
       text1="30% de reducation du 20 au 24 Décambre 2018 pour tous les RDV
       planitlés entre 14h et 17h"
       itemIcon=""
   />
         <AnnoncesContainer
       title="UNE RENTREE BIEN COIFFEE!"
       date="04/09/2010"
       text1="A l'occasion de la rentrée,pour tout nouveau client
       parrainé,bénéficiez d'une coupe gratuite"
       itemIcon=""
   />
           <AnnoncesContainer 
       title="OFFRE D'ETE"
       date="26/06/2018"
       text1="Voir plus?"
       itemIcon=""
   />
   </ScrollView>
     </View>
    );
  }
}
