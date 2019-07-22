import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Body, ListItem ,CheckBox} from 'native-base';

export default class Offres extends Component {
	render() {
		return (
			<View>
				 <ListItem>
            <CheckBox checked={true} color="#623f2b"/>
            <Body>
              <Text>Uniquement les offres heurs creuse et derniére minute</Text>
            </Body>
          </ListItem>
                </View>
			
		);
	}
}
