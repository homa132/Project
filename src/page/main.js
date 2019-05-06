import React, {Component} from 'react';
import {  StyleSheet, View} from 'react-native';
import CreateCategory from '../category/creactCategory'


export default class MainPage extends Component {

static navigationOptions  = {
    header: null, 
}

    render(){
        return( 
                <View style={styles.conteiner}>
                        <CreateCategory
                        navigation={this.props.navigation}
                        textHeader="Всі події"
                        category='all'
                        />
                </View>

        )
    }
}



const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
})