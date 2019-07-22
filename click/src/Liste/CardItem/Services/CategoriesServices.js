import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { CardItem } from 'native-base';

export default class CategoriesServices extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Categories de Services:</Text>
        <CardItem style={{backgroundColor:'#CED3DC'}}>
        <View style={{ flexDirection:'row',paddingLeft:5}}>
        <Image source={require('../../../images/tout.png')}  />
        <Image source={require('../../../images/homme.png')}  />
        <Image source={require('../../../images/coiffure.png')} />
        <Image source={require('../../../images/visage.png')}  />
        </View>
        </CardItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingTop:20,
  },
});
