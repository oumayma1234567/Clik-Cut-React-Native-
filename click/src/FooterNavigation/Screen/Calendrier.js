
import React, { Component } from 'react';
import {Text, View,StyleSheet} from 'react-native';
import { Icon} from 'native-base';
import {  CalendarList } from 'react-native-calendars';
export default class Calendrier extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(<Icon name="calendar"  style={{color: 'gray',fontSize:35}} />)
    };
  render() {
    return (
        <View >
              <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}
    />   
      </View>
    )
  }}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%'
    }
});