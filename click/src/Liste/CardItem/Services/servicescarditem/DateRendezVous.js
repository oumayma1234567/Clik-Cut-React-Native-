import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DateRendezVous extends Component {
    constructor(){
        super()
        this.state = {
            isVisible: false,
        }
    }
    handlePicker=()=>{
        this.setState({
            isVisible:false,
           
        })
    }
    showPicker=()=>{
        this.setState({
            isVisible:true
        })
    }
    hidePicker=()=>{
        this.setState({
            isVisible:false,
        })
    }
  render() {
    return (  
      <View>
 <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Date du rendez-vous:</Text>
 <TouchableOpacity onPress={this.showPicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
 
 <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode={'datetime'}
          is24Hour={false}
          datePickerModeAndroid={'spinner'}
          mode={'time'}
          datePickerModeAndroid={'spinner'}
        />
</View>

    );
  }
}

