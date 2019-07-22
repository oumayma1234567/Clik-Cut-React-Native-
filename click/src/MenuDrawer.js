import React, { Component } from 'react';
import { Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Container, Footer, FooterTab } from 'native-base';
import { Image,StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DrawerData from './DrawerMenu/DrawerData'
import DrawerItem  from './DrawerItem'
export default class MenuDrawer extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Search',
     
    };
  }

  onSearch=()=>{
    // const {navigate}= this.props.navigate
    this.props.navigation.navigate('AccordionCategory');
  }
    render(){
        return(
          <Container style={{width:'100%'}}>
        <Content style={{flex:1}}>
                 <LinearGradient colors={['#91684a','#260033']}>
                <View style={{paddingTop:40}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
      <View style={{flexDirection:'column',alignItems:'center',position:'relative'}}>
            
            <Image source={require('./images/Accueil.png')} style={{width:80,height:80,borderRadius:40,borderColor:"#ffffff"}}/>
        </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#ffffff'}} >Guillaume Gérin</Text>
              <Icon active name="arrow-forward" style={{color:'#ffffff',paddingLeft:20}} />
            </View>
             <Text style={{color:'#ffffff'}} >guillaumeger@gmail.com</Text>
           </View>
           {/* <FlatList
          data={DrawerData }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <DrawerItem item={item}/>}
        />  */}
      
        <List>
          <ListItem>
              <Left>
            <Text style={{color:'#ffffff'}}>Mon compte</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" style={{color:'#ffffff'}} />
            </Right>
          </ListItem>
          <ListItem>
              <Left>
                <TouchableOpacity  onPress={this.onSearch}>
            <Text style={{color:'#ffffff'}}>Gatégories</Text>
            </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" style={{color:'#ffffff'}}/>
            </Right>
          </ListItem>
          <ListItem>
              <Left>
            <Text style={{color:'#ffffff'}}>Historique</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" style={{color:'#ffffff'}} />
            </Right>
          </ListItem>
          <ListItem>
              <Left>
            <Text style={{color:'#ffffff'}}>Favoris</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" style={{color:'#ffffff'}}/>
            </Right>
          </ListItem>
          <ListItem>
              <Left>
            <Text style={{color:'#ffffff'}}>Messages</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward"  style={{color:'#ffffff'}}/>
            </Right>
          </ListItem>
          <ListItem>
              <Left>
            <Text style={{color:'#ffffff'}}>Aide</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward"  style={{color:'#ffffff'}}/>
            </Right>
          </ListItem>
        </List>
  
            <ListItem  style={{paddingTop:130}}>
              <TouchableOpacity >
              <Icon name="settings" style={{color:'#ffffff',paddingLeft:30}}/>
              <Text style={{color:'#ffffff',fontSize:15}}>Paramétres</Text>
              </TouchableOpacity>
              <TouchableOpacity >  
              <Icon name="log-out" style={{color:'#ffffff',paddingLeft:80}}/>
              <Text style={{color:'#ffffff',paddingLeft:60,fontSize:15}}>Déconnexion</Text>
              </TouchableOpacity>
              </ListItem> 
              </View>
            </LinearGradient>
        </Content>
    </Container>

    );
}
    
}
const styles = StyleSheet.create({
  liste:{
    flexDirection: "row",
    },

})