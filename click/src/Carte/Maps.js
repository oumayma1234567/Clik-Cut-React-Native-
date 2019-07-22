import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';






export default class Maps extends Component {
  render() {
    return (
     
      <View>
        
      <MapView
                            style={{
                                position: 'relative',
                                left: 0,
                                top:0,
                                right: -30,
                                bottom: 20,
                                height: 300,
                                width: '100%',
                                borderRadius:2,
                                borderWidth: 2,
                                borderColor:'#515160'
                            }}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.081,
                            }}
                        >
                            <Marker
                                coordinate={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                }}
                                pinColor='#FF9C6B' />
                               
                        </MapView>
               
                </View>        
      
    );
  }
}
