import React from 'react';
import {DatePickerAndroid,Button} from 'react-native';



class Calendar extends React.Component {

     needForCalendar = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              this.props.selected(`${year}-${month}-${day}`)
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }


    render(){
        return (
            <Button
            title='open calendar'
            onPress={this.needForCalendar}/>
        )
    }
}
    
export default Calendar;