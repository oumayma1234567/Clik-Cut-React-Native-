import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Drawer, Title, Button,Icon ,Tab,Tabs } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import MenuDrawer from '../MenuDrawer';
import Click from './Click';
export default class Header extends Component {
  static navigationOptions = {
    header:null
  };
  onPressedNavigation=()=>{
    // const {navigate}= this.props.navigate
    this.props.navigation.navigate('WelcomeClick');
  }
  // closeDrawer () {
  //   this._drawer._root.close()
  // }
  // openDrawer () {
  //   this._drawer._root.open()
  // }
  // onOpen = () => {
  //   this.setState({ isVisible: false });
  // };
  render() {
   
    return (
    <View>
  <LinearGradient colors={['#91684a','#260033']}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:55}}>
        <View>
     
          <Icon name='menu' style={{ fontSize: 30 ,color:'#ffffff'}} />

        </View>
       
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'#ffffff'}}>Click&Cut</Text>
        </View>
        <View>
          <TouchableOpacity  onPress={this.onPressedNavigation}>
          <Icon name='arrow-forward' style={{ fontSize: 30 ,color:'#ffffff'}} />
          </TouchableOpacity>
      </View>
      
      </View>
      </LinearGradient>
</View>
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
  modalView: {
    alignItems: "center",
    width:'70%',
    height:'100%',
   alignItems:'flex-end',
    margin: 0
  },
})