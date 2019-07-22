import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
export default class AgendaClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2019-04-03'}
        // renderTitle={this.renderTitle.bind(this)}
        // renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        // rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2019-04-01': {textColor: '#666'},
        //    '2019-04-02': {textColor: '#666'},
        //    '2019-04-03': {startingDay: true, endingDay: true, color: '#73503c'},
        //    '2019-04-04': {textColor: '#666'},
        //    '2019-04-05': {endingDay: true, textColor: '#666'},
        //    '2019-04-06': {textColor: '#666'},
        //    '2019-04-07': {textColor: '#666'},
        //    '2019-04-08': {textColor: '#666'}
        //   }}
         monthFormat={'yyyy'}
         theme={{calendarBackground: 'white'}}
        renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }
  // renderTitle() {
  //   return (
  //     <View style={styles.title}><Text>Definir</Text></View>
  //   );
  // }

  // renderItem(item) {
  //   return (
  //     <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
  //   );
  // }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
      <View style={{flexDirection:'row',justifyContent:'center',paddingBottom:5}}><Text>Définir l'heure du rendez-vous</Text></View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text>08:00</Text>
      <Text>08:30</Text>
      <Text>09:00</Text>
      <LinearGradient colors={['#91684a','#260033']}> 
      <View style={{height:30,width:50}}>
      <Text>09:30</Text>
      </View>
      </LinearGradient> 
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text>10:00</Text>
      <Text>10:30</Text>
      <Text>11:00</Text>
      <View style={{height:30,width:50}}><Text>11:30</Text></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text>12:00</Text>
      <Text>12:30</Text>
      <Text>13:00</Text>
      <View style={{height:30,width:50}}><Text>13:30</Text></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text>14:00</Text>
      <Text>14:30</Text>
      <Text>15:00</Text>
      <View style={{height:30,width:50}}><Text>15:30</Text></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text>16:00</Text>
      <Text>16:30</Text>
      <Text>17:00</Text>
      <View style={{height:30,width:50}}><Text>17:30</Text></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Text>18:00</Text>
      <Text>18:30</Text>
      <Text>19:00</Text>
      <View style={{height:30,width:50}}><Text>19:30</Text></View>
      </View>
      </View>
    );
  }

  // rowHasChanged(r1, r2) {
  //   return r1.name !== r2.name;
  // }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#73503c',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    color:'#73503c'
  },
  emptyDate: {
   
    flex:1,
    paddingTop: 20  
  },
  title:{
   color:'black' 
  }
});