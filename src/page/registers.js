import React, {Component} from 'react';
import {TouchableOpacity,View,StyleSheet,Text,TextInput} from 'react-native';

export default class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
          login: '',
          password: ''
        }
      }

      newAccount = () => {
        this.props.navigation.replace('Auth');
      }

    render(){
        return (
          <View style={styles.conteiner}>
            <Text style={styles.MainText}>Реєстрація</Text>
            <View style={{alignItems:'flex-start'}}>
              <Text style={styles.SeconText}>Логін: </Text>
              <TextInput
                style={styles.inputs}
                value={this.state.login}
                onChangeText ={login => this.setState({login})}

                />
            </View>
            <View style={{alignItems:'flex-start'}}>
              <Text style={styles.SeconText}>Пароль: </Text>
              <TextInput
                style={styles.inputs}
                value={this.state.password}
                onChangeText ={password => this.setState({password})}
                />
            </View>
            <TouchableOpacity
              style={styles.buttonConteiner}
              onPress={this.newAccount}>
              <Text style={styles.buttonText}>Зареєструвати</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  conteiner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(144, 218, 141, 0.815)',
    borderColor: 'rgba(11, 75, 27, 0.5)',
    borderWidth: 3,
    width: '100%',
    height: '100%',
  },
  MainText: {
    fontSize: 32,
    letterSpacing: 7,
    color: 'rgba(8, 80, 5, 0.99)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  SeconText: {
    fontSize: 20,
    letterSpacing: 4,
    color: 'rgba(8, 80, 5, 0.99)',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputs: {
    width: 175,
    height: 30,
    borderColor: 'rgba(8, 80, 5, 0.99)',
    borderWidth: 1.5,
    borderRadius: 5,
    fontSize: 14,
    paddingVertical: 2,
    marginBottom: 15
  },
  buttonConteiner: {
    width: 180,
    height: 40,
    backgroundColor: 'rgba(8, 80, 5, 0.99)',
    borderRadius: 7,
    borderColor: 'rgba(228, 255, 227, 0.815)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'rgba(228, 255, 227, 0.815)',
  }
})