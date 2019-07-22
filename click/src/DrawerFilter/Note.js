import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardItem, Icon, Container } from 'native-base';
import StarRating from 'react-native-star-rating';

export default class Note extends Component {
	render() {
		return (
		<View>
            <CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{color:'#C29D73'}}>Note</Text>
					<Icon active name="arrow-forward"style={{color:'#C29D73'}} />
				</CardItem>
                <CardItem>
                    <Text>Note minimale:</Text>
                </CardItem>
                <CardItem style={{justifyContent:'center'}}>
                <StarRating
                disabled={true}
                maxStars={5}
                rating={4}
                starSize={20}
                fullStarColor='orange'
                emptyStarColor='orange'

              /></CardItem>
              </View>
        
		);
	}
}
