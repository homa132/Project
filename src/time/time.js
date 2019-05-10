import React ,{Component} from 'react';
import {StyleSheet,TouchableOpacity, Text,View,TimePickerAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Time extends Component{

  state = {
    time: 'не вибраний'
  }

 changeTime = async () =>  {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 0,
        minute: 0,
        is24Hour: true,
        mode: 'spinner'
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        this.setState({time:`${hour}-${minute}`})
        this.props.selected(`${hour}-${minute}`)
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }


    render (){
        return (
          <View style={styles.conteiner}>
            <TouchableOpacity
                onPress={this.changeTime}
                style={styles.conteinerButton}>
                <Icon name='access-time' size={17} color="#000000" />
                <Text style={styles.textButton}>Вибрати час</Text>
            </TouchableOpacity>
            <Text>Час: {this.state.time}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
  },
  conteinerButton: {
    width: '95%',
    maxWidth: 150,
    height: 35,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: 'rgb(165, 247, 192)',
    borderColor:'rgb(190, 248, 209)',
    borderWidth: 5,
    borderRadius: 1,
  },
  textButton: {
    fontSize: 14,
    color: 'black',
    letterSpacing: 3,
    fontWeight: 'bold',
    marginLeft: 10,
  }
})
