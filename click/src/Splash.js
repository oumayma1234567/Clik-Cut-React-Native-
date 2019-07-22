import React, { Component } from 'react';
import { Text, View, StyleSheet ,ImageBackground} from 'react-native';


export default class Carte extends Component {
    render() {
        return (
            
                <ImageBackground
                    source={
                        require('./images/splash.png')
                    }
                    style={{ width:'100%', height: '100%' }}
                />
          
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})