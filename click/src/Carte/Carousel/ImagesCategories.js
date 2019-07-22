import React, { Component } from "react";
import{View,Image} from 'react-native'

export default class ImageCategories extends Component {
  render() {
    return (
        <View>
          <Image
          source={this.props.image}
        />
       </View>
    );
  }
}
<br/>