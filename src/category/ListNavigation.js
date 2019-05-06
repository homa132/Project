import React from 'react';
import {View, Button} from 'react-native';

export default function ListDrawer (props) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
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