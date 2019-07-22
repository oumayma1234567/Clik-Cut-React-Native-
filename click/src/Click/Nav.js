import React from 'react';
import { TouchableOpacity, Icon} from 'react-native';


const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} >
       <Icon name='arrow-forward' style={{ fontSize: 30 ,color:'#ffffff'}} >
    </Icon> 
    </TouchableOpacity>

  );
}


export default Button