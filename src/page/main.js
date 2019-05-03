import React, {Component} from 'react';
import { Button, StyleSheet, View, ScrollView} from 'react-native';
import CalendarCreate from '../calendar/calendarSecond';
import { DrawerActions } from 'react-navigation-drawer';
import ItemList from '../createItemList/mainCategory';


export default class MainPage extends Component {

    static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: 'Всі події',
            headerTitleStyle: {
                marginLeft: '19%',
                fontSize: 25,
                alignSelf: 'center',
                color: 'red',
                letterSpacing: 5
            },
            headerLeft: (<Button
                title='категорії'
                onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}/>),
            headerRight: (<Button
                    title='Створити '
                    onPress={() => navigation.navigate('Create')}/>)}
    }

    render(){
        
        return( 
                <View style={styles.conteiner}>
                    <ScrollView>
                        <CalendarCreate/>
                        <ItemList
                        navigation={this.props.navigation}/>
                    </ScrollView>
                </View>

        )
    }
}



const styles = StyleSheet.create({
    conteiner: {
        flex: 1
    },
})