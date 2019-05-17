import React from 'react';
import {View, ScrollView,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/Entypo';

const shadowButton = {
  width:250,
  height:45,
  color:'#00FF00',
  border:7,
  radius:5,
  opacity:0.3,
  x:0,
  y:0,
  style: {marginVertical:10}
}


export default function ListDrawer (props) {

const _createButton = (text,nav,icon) => {
    return (
      <BoxShadow setting={shadowButton}>
                <TouchableOpacity style={styles.conteinerButton}
                                  onPress={()=> props.navigation.replace(nav)}>
                  <Icon name={icon} size={30} color="#000000" />                  
                  <Text style={styles.textButton}>{text}</Text>
                </TouchableOpacity>
      </BoxShadow>
    )
  }

    return (
      <ScrollView style={{height: '100%',backgroundColor: 'rgb(238, 253, 243)',}}>
        <View style={styles.conteiner}>
            {_createButton('Головна','Main','home')}
            {_createButton('Спорт','Sport','medal')}
            {_createButton('Танці','Dance','drink')}
            {_createButton('IT сфера','IT','laptop')}
        </View>
      </ScrollView>
      );
}




const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  conteinerButton: {
    width: 250,
    height: 45,
    backgroundColor: 'rgb(165, 247, 192)',
    borderColor:'rgb(190, 248, 209)',
    borderWidth: 5,
    borderRadius: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textButton: {
    color: 'rgba(0, 0, 0, 0.781)',
    fontSize: 25,
    letterSpacing: 6,
    fontWeight: 'bold',
    marginLeft: 30,
  }
})