import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Item, Input, Icon } from 'native-base';



export default class Form extends Component {
    render() {
        return (
            <View>
                <View style={{ width: 260,
        height: 50}}>

                    <TextInput
                        placeholder="Username ..."

                    />
                </View>
            </View>
        );
    }
}


