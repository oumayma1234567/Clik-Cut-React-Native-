import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';
import { Card, CardItem, Icon, Container } from 'native-base';

export default class Prix extends Component {
	state={
        slideValue: 40,
    }

	render() {
		return (
			<View>
				<CardItem style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{color:'#C29D73'}}>Prix</Text>
					<Icon active name="arrow-forward" style={{color:'#C29D73'}} />
				</CardItem>
                <CardItem style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
				<View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text>Prix Max :</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text>100</Text>
                    <Icon active name="logo-euro" style={{fontSize: 17, paddingLeft:10}} />
                    </View></View>
					<View style={{borderRadius: 50, overflow: 'hidden'}}>       
            <View style={{flexDirection: 'row', position: 'absolute'}}>
                <View style={sliderStyle.sliderDummy}></View>
                <View style={sliderStyle.sliderReal}></View>
            </View>
            <Slider 
                style={{width: 300, height: 30, borderRadius: 50}}
                minimumValue={0}
                maximumValue={100}
                value={this.state.slideValue}
                onValueChange={(value)=> this.setState({ slideValue: value}) }
                maximumTrackTintColor='#422040'  
				minimumTrackTintColor='#422040'
                />  

            </View>
                </CardItem>
			</View>
		);
	}
}
const sliderStyle = {
	sliderDummy: {
		backgroundColor: 'transparent',
		width: 300,
		height:30,
		borderRadius: 50,
		position: 'absolute',                
	},
	sliderReal: {
		backgroundColor: '#422040',
		height:30,
	}
}