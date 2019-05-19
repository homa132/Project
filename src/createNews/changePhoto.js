import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/Feather';

export default class ChangePhoto extends Component {

  state = {
    urlImage: ['']
  }

  photos = () => {

    ImagePicker.openPicker({
      multiple: true,
      width: 800,
      height:800,
      cropping: true,
    }).then(images => {
      this.setState({urlImage:images});
      this.props.checkImg(this.state.urlImage)
    });

  }

  render() {
    
    return (
      <View style={styles.conteiner}>
        <BoxShadow setting={shadowButton}>
          <TouchableOpacity
              onPress={this.photos}
              style={styles.conteinerButton}>
              <Icon name='image' size={17} color="#000000" />
              <Text style={styles.textButton}>Вибрати фото</Text>
          </TouchableOpacity>
        </BoxShadow>
      </View>
    );
  }
}

const shadowButton = {
  width:180,
  height:30,
  color:'#00FF00',
  border:7,
  radius:5,
  opacity:0.3,
  x:0,
  y:0,
  style: {marginBottom:7}
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
    width: 180,
    height: 30,
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
    fontSize: 15,
    color: 'black',
    letterSpacing: 4,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  image: {
    borderColor: 'rgba(0, 0, 0, 0.6)',
    borderWidth: 2,
    borderRadius: 1,
    width: 200,
    height: 200
  }
})