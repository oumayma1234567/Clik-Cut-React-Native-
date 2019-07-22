import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { CardItem, Card } from 'native-base';





export default class Category extends Component {
    render() {
        return (
            <Card>
           <CardItem >
            <View style={{ flexDirection: 'row', height: 100, width: 255, marginLeft: 20 }} >
                <View style={{width:110,height:100,paddingRight:10}}>
                    <Image source={this.props.imageUri} style={{ flex: 1, resizeMode: "cover", width: 130, height: 70}} />
                </View>
                <View style={{ flexDirection: 'column', flex: 1,paddingLeft:30 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#919581", fontWeight: 'bold', paddingTop: 10}}>{this.props.name}</Text>
                    </View>
                    <View style={{ flex: 1}}>
                        <Text style={{ color: "#96C120" }}>{this.props.condition}</Text>
                    </View>
                    <View style={{ flex: 1}}>
                        <Text style={{ color: "#919581" }}>{this.props.distance}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{ color: "#FBC723" }}>{this.props.avi}</Text>
                    </View>
                    <View >
                        <Text style={{ color: "#919581" }}>{this.props.nbrAvis}</Text>
                    </View>
                    </View>
                </View>
            </View>
</CardItem>
</Card>
        );
    }
}
