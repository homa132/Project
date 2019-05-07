import React from 'react';
import {View, Button,StyleSheet,TouchableOpacity,Text} from 'react-native';

export default function ListDrawer (props) {
    return (
        <View style={styles.conteiner}>
            <Button
            title='Main'
            onPress={()=> props.navigation.push('Main')}/>
            <Button
            title='Sport'
            onPress={()=> props.navigation.push('Sport')}/>
            <Button
            title='Dance'
            onPress={()=> props.navigation.push('Dance')}/>
            <Button
            title='IT'
            onPress={()=> props.navigation.push('IT')}/>
        </View>
      );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(197, 255, 197, 0.836)',
  }
})