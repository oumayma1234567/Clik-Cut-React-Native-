import React from 'react';
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

 export default  class SignUp extends React.Component {



  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.contain}>

      <View>
        <Text style={styles.name}>SINGUP !</Text>
        </View>
       
        <View style={styles.login} >
        <TextInput style={styles.inputs}
          placeholder="First name..."
      
        />
         <TextInput style={styles.inputs}
          placeholder="Last name ..."
   
         
     
        />
         <TextInput style={styles.inputs}
          placeholder="Username ..."
        
     
        />       
          <TextInput  secureTextEntry={true} 
           style={styles.inputs}
          placeholder="Password ..."
       
        />
         <TextInput secureTextEntry={true} 
          style={styles.inputs}
          placeholder="Confirm password ..."
       
     
        />
        <View style={styles.butcontainer}>
        <LinearGradient colors={['#91684a','#260033']}>
        <TouchableOpacity  style={{height:50}}> 
              <Text style={{color:'#ffffff',fontSize:15,textAlign:'center',paddingTop:12}}>SINGUP</Text>
              </TouchableOpacity>
              </LinearGradient>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
     
      </View>
      </View>
      </KeyboardAvoidingView>
      
    );
  }
}
  const styles = StyleSheet.create({
    contain:{

    padding:10,
    },
    error:{
      fontSize:10,
      paddingLeft:10,
      color: "red",
      },
   
    name: {
     margin:20,
     color:"black",
     fontSize:25,
     textAlign:'center',
     fontWeight: 'bold',
  },
  HeaderStyle: {
    backgroundColor: 'red'
  },
  inputs:{
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#73503c',
    height: 50,
    marginTop:12,
     padding: 12,
     fontSize: 16,
  },
  butcontainer:{
    paddingTop: 12,
  },
  button1:{ 
  

  },
  login:{
    padding:10,
  },
  signup:{
bottom:0,
fontSize:12,
padding: 12,
  },
  forget:{
    bottom:0,
    fontSize:12,
    padding: 12,
    
  } 
});
