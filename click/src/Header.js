import React, { Component } from 'react';
import { Drawer, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SideBar from './MenuDrawer';
import MenuFilter from './MenuFilter'
import FooterTabs from './FooterNavigation/FooterTabs'
export default class Header extends Component {
  closeDrawer () {
    this._drawer._root.close()
  }
  openDrawer () {
    this._drawer._root.open()
  }
  render() {
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<SideBar navigator={this._navigator} />}
      onClose={() => this.closeDrawer()}
      side={'left'} >
      <View style={styles.header}>
        <View>
          <Button transparent onPress={()=>this.openDrawer()}>
          <Icon name='menu' style={{ fontSize: 30 ,color:'black',paddingTop:10}} />
          </Button>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,paddingTop:10}}>ACCUEIL</Text>
        </View>
        <MenuFilter/>
      </View>
      <FooterTabs/> 
</Drawer>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

})



