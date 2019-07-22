import React, { Component } from 'react';
import { Drawer, Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MenuDrawer from './MenuDrawer';
import MenuFilter from './MenuFilter'
import DrawerFilter from './DrawerFilter'
import FooterTabs from './FooterNavigation/FooterTabs'
import Carte from './Carte/Carte'
import CardItemNavigation from './Liste/CardItemNavigation'
import LinearGradient from 'react-native-linear-gradient';
import TabsHome from './TabsHome';
import Modal from "react-native-modal";
import NavigationDrawerGategories from './NavigationDrawerGategories';
export default class Home extends Component {
  state = {
    isVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isVisible: !this.state.isVisible });

  closeDrawer () {
    this._drawer._root.close()
  }
  openDrawer () {
    this._drawer._root.open()
  }
  onOpen = () => {
    this.setState({ isVisible: false });
  };
  render() {
    return (
    
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<NavigationDrawerGategories navigator={this._navigator} />}
      onClose={() => this.closeDrawer()} 
      openDrawerOffset={0.3}
     
  >   
  <LinearGradient colors={['#91684a','#260033']}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View>
          <Button transparent onPress={()=>this.openDrawer()}>
          <Icon name='bars' style={{ fontSize: 30 ,color:'#ffffff'}} />
          </Button>
        </View>
       
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,color:'#ffffff'}}>ACCUEIL</Text>
        </View>
        <View>
        <TouchableOpacity onPress={this._toggleModal}>
          <Icon name='filter' style={{ fontSize: 30 ,color:'#ffffff'}} />
        </TouchableOpacity>
        <Modal
              style={styles.modalView}
              isVisible={this.state.isVisible}
              onBackdropPress={this.onOpen}
              hasBackdrop
              backdrop={true}
              backdropOpacity={0.6}
            >
            <DrawerFilter/>
            </Modal>
      </View>
      </View>
      </LinearGradient>
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
  modalView: {
    width:'70%',
    height:'100%',


   
  },
})