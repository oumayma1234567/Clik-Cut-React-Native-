import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Icon, Button } from 'native-base';

const ConxButton = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <View >
                        <Button style={{backgroundColor:'#515bd4',width:50,borderRadius:50}}>
                        
                            < Icon name="logo-facebook" style={{ fontSize: 20 }} />
                            
                        </Button>
                    </View>
                    <View >
                        <Button  style={{backgroundColor:'#de4307',width:50,borderRadius:50}}>
                      
                            < Icon name="logo-googleplus" style={{ fontSize: 20 }} />
                           
                        </Button>
                    </View>
          
                    <View >
                        <Button  style={{backgroundColor:'#1ec0ff',width:50,borderRadius:50}}>
                     
                            < Icon name="logo-twitter" style={{ fontSize: 20 }} />
                        
                            
                        </Button>
                    </View>
                    </View>
  );
}


export { ConxButton };