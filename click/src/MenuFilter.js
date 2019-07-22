import React, { Component } from 'react';
import { Drawer, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DrawerFilter from './DrawerFilter'
export default class Home extends Component {
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
      content={<DrawerFilter navigator={this._navigator} />}
      onClose={() => this.closeDrawer()} 
      side={'right'}
      >
      <View style={styles.header}>
        <View>
          <Button transparent onPress={()=>this.openDrawer()}>
          <Icon name='menu' style={{ fontSize: 30 ,color:'black',paddingTop:10}} />
          </Button>
        </View>
      </View>
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