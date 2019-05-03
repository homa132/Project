import React ,{Component} from 'react';
import {Button,TimePickerAndroid} from 'react-native';

export default class Time extends Component{

 changeTime = async () =>  {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 0,
        minute: 0,
        is24Hour: true,
        mode: 'spinner'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.props.selected(`${hour}-${minute}`)
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }


    render (){
        return (
            <Button
            title='change time'
            onPress={this.changeTime}/>
        )
    }
}