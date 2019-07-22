import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import CategoriesFemme from './Categories/CategoriesFemme';
import LinearGradient from 'react-native-linear-gradient';


export default class Femme extends Component {
  render() {
    return (  
        <View style={{paddingTop:30,paddingLeft:25}}>
        
<TouchableOpacity>
<CategoriesFemme
imageUri={require('../../images/coiffure.png')}
text="Coiffure"
itemIcon1=""
/></TouchableOpacity>
<TouchableOpacity>
<CategoriesFemme
imageUri={require('../../images/coiffure.png')}
text="Epilation"
itemIcon1=""
/>
</TouchableOpacity>
<TouchableOpacity>

<CategoriesFemme
imageUri={require('../../images/coiffure.png')}
text="Visage"
itemIcon1=""
/></TouchableOpacity>
<TouchableOpacity>
<CategoriesFemme
imageUri={require('../../images/coiffure.png')}
text="Mains & Pieds"
itemIcon1=""
/>
</TouchableOpacity>
<TouchableOpacity>
<CategoriesFemme
imageUri={require('../../images/coiffure.png')}
text="Corps"
itemIcon1=""
/>
</TouchableOpacity>
<TouchableOpacity>
<CategoriesFemme
imageUri={require('../../images/coiffure.png')}
text="Massage"
itemIcon1=""
/>
</TouchableOpacity>
</View>

      );
    }
        
    }
 




