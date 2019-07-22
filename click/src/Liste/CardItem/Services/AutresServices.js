import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class AutresServices extends React.Component {
  render() {
    return (
      <View >
        <Text style={{fontWeight:'bold',color:'black',fontSize:16,paddingBottom:10}}>Résumé</Text>
        <View style={{borderBottomWidth:0.5, borderBottomColor:'gray'}}>
        <View style={{flexDirection:'row'}}>
   <Text style={{fontWeight:'bold',color:'black',fontSize:16}}>Date</Text>
   <Text style={{fontSize:15}}>:Mardi,26 Février</Text>
      </View>
     <View style={{flexDirection:'row'}}> 
     <Text style={{fontWeight:'bold' ,color:'black',fontSize:16}}>Heure</Text>
     <Text style={{fontSize:15}} >:11:40</Text>
       </View> 
       </View>
       <View style={{borderBottomWidth:0.5,borderBottomColor:'gray'}}>
       <Text style={{fontWeight:'bold' ,color:'black',fontSize:16}}>Services Séléctionné :</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{fontSize:15}}>Coupe Homme</Text>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:15}}>12,35</Text>
         <Icon name="logo-euro" style={{paddingLeft:5,fontSize:12,paddingTop:5,color:'gray'}}/>
         </View>
       </View>
       </View>
       <View>
         <Text style={{fontWeight:'bold' ,color:'black',fontSize:16}}>Coiffeur Séléctionné:</Text>
         <Text style={{fontSize:15}}>Gustave Chapuis</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-around'}}>
<TouchableOpacity>
            <View style={{backgroundColor:'#eae3e3',width:190,height:40}}>
              <Text style={{color:'gray',textAlign:'center',paddingTop:7}}>Modifier</Text>
          </View>
</TouchableOpacity>

<TouchableOpacity>
            <View style={{backgroundColor:'#eae3e3',width:190,height:40}}>
              <Text style={{color:'gray',textAlign:'center',paddingTop:7}}>Supprimer</Text>
          </View>
</TouchableOpacity>
</View>
<View style={{paddingTop:20,paddingLeft:2,paddingRight:2}}>

<LinearGradient colors={['#91684a','#260033']}>
<TouchableOpacity>
            <View style={{height:50}}>
              <Text style={{color:'#ffffff',textAlign:'center',paddingTop:12}}>+AJOUTER D'AUTRES SERVICES</Text>
          </View>
</TouchableOpacity> 
</LinearGradient>

</View>
      </View>
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
