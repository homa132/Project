import React, {Component} from 'react';
import { Button, StyleSheet, View, ScrollView,RefreshControl} from 'react-native';
import CalendarCreate from '../calendar/calendarSecond';
import { DrawerActions } from 'react-navigation-drawer';
import CreateCategory from '../category/creactCategory'


export default class MainPage extends Component {

static navigationOptions  = {
    header: null, 
}
    nav(){
        console.log(this.props.navigation)
    }

    render(){
        this.nav()
        return( 
                <View style={styles.conteiner}>
                    <ScrollView
                    refreshControl={
                        <RefreshControl
                          refreshing={false}
                          onRefresh={() => console.log('hi')}
                        />
                      }>
                        <CreateCategory
                        navigation={this.props.navigation}
                        textHeader="Всі події"
                        category='all'
                        />
                    </ScrollView>
                </View>

        )
    }
}



const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
})