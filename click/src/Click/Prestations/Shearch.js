import React, { Component } from 'react';
import { View,TextInput} from 'react-native';



export default class Shearch extends Component {

  render() {
    return (  
<View >
        <TextInput placeholder="Coupe,Corps,barbier,esthéticienne..." style={{flexDirection:'row',  
        borderBottomWidth: 1,
       paddingLeft:25
       }}/>
      
     
</View> 
        
  

    );
  }
}

