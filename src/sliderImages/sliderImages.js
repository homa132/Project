import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

class App extends Component {
  
  render() {
    
    
    return (
        <ImageSlider
          loop
          autoPlayWithInterval={12000}
          images={this.props.images?this.props.images:null}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                { width },
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  customSlide: {
    backgroundColor: 'rgba(200, 255, 221, 0.726)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width:  Dimensions.get('window').width,
    height:  Dimensions.get('window').width,
  },
});

export default App;