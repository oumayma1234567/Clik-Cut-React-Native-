import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import VotreAvis from './VotreAvis';
import { CardItem ,Footer} from 'native-base';
import ListeAvis from './ListeAvis';
export default class Avis extends React.Component {
  render() {
    return (
        <View>
          <ScrollView Vertical={true}>
          <CardItem style={styles.container}>
        <Text >Avis(2)</Text>
        </CardItem>
       <ListeAvis/>
      <VotreAvis/>
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
