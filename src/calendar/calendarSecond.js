import React from 'react';
import {DatePickerAndroid, StyleSheet,TouchableOpacity, Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';



class Calendar extends React.Component {

  state = {
    date: 'не вибрана'
  }

     needForCalendar = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              this.setState({date:`${year}-${month}-${day}`});
              this.props.selected(this.state.date);
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }

    allItems = () => {
      this.props.allDataItems();
      this.setState({date: 'не вибрана'})
    }

    render(){
        return (
          <View style={styles.conteiner}>
            <View style={{flex:1,flexDirection: 'row',justifyContent: 'space-between'}}>
              <TouchableOpacity
                    onPress={this.needForCalendar}
                    style={styles.conteinerButton}>
                    <Icon name='calendar' size={20} color="#000000" />
                    <Text style={styles.textButton}>Вибрати дату</Text>
                </TouchableOpacity>
                {this.props.twoBottom?
                   <TouchableOpacity
                    onPress={this.allItems}
                    style={styles.conteinerButton}>
                      <Icon name='close-o' size={20} color="#000000" />
                      <Text style={styles.textButton}>Скинути дату</Text>
                  </TouchableOpacity>
                  :
                  null
              }
               
            </View>
              <Text>Дата: {this.state.date}</Text>
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
    width: '98%',
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
    marginHorizontal: 5,
  },
  textButton: {
    fontSize: 14,
    color: 'black',
    letterSpacing: 3,
    fontWeight: 'bold',
    marginLeft: 5,
  }
})


export default Calendar;