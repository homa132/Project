import React, {Component} from 'react';
import {ActivityIndicator,View,StyleSheet} from 'react-native';

export default class ActivIndicator extends Component {
    render() {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})