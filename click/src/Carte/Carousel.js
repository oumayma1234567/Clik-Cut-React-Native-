import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Category from './Carousel/Category';

export default class Carousel extends Component {
    render() {
        return (
           
                
                       
                        
                        <ScrollView horizontal={true}> 
                            
                              <Category 
                                imageUri={require('C:/Users/toolynk/click/images.jpg')}
                                name="DESSANGE"
                                condition="Ouvert"
                                distance="0.4 km"
                                avi="★★★★✩"
                                nbrAvis="43"
                                /> 
                               
                                    <Category 
                                imageUri={require('C:/Users/toolynk/click/images.jpg')}
                                name="DESSANGE"
                                condition="Ouvert"
                                distance="0.4 km"
                                avi="★★★★✩"
                                nbrAvis="43"
                                />
                            
                                <Category 
                                imageUri={require('C:/Users/toolynk/click/images.jpg')}
                                name="DESSANGE"
                                condition="Ouvert"
                                distance="0.4 km"
                                avi="★★★★✩"
                                nbrAvis="43"
                                />
                                   <Category 
                                imageUri={require('C:/Users/toolynk/click/images.jpg')}
                                name="DESSANGE"
                                condition="Ouvert"
                                distance="0.4 km"
                                avi="★★★★✩"
                                nbrAvis="43"
                                />
                                   <Category 
                                imageUri={require('C:/Users/toolynk/click/images.jpg')}
                                name="DESSANGE"
                                condition="Ouvert"
                                distance="0.4 km"
                                avi="★★★★✩"
                                nbrAvis="43"
                                />
                                   <Category 
                                imageUri={require('C:/Users/toolynk/click/images.jpg')}
                                name="DESSANGE"
                                condition="Ouvert"
                                distance="0.4 km"
                                avi="★★★★✩"
                                nbrAvis="43"
                                />
                          
                           </ScrollView>
                      
               
           
        );
    }
}

