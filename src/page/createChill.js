import React, {Component} from 'react';
import { View, Button, StyleSheet,TextInput} from 'react-native';
import Calendar from '../calendar/calendarSecond';
import {connect} from 'react-redux'
import {pushNewNews} from '../../redux/actions/actions';
import Time from '../time/time';

 class MainPage extends Component {

     static navigationOptions  = ({navigation}) => {
        return {
            headerTitle: 'Створити подію',
            headerTitleStyle: {
                marginLeft: '9%',
                fontSize: 25,
                alignSelf: 'center',
                color: 'red',
                letterSpacing: 5
            },
            headerLeft: (<Button
                    title='Всі події'
                    onPress={() => navigation.navigate('Main')}/>)}
    }

    state = {
        id: '',
        title: '',
        date: '',
        time: '',
        category: {
            dance: true,
            sport: true,
            it: true
        },
        text: '',
    }

    saveNews = () => {
        this.props.pushNewNews(this.state)

    }

    render(){
        return( 
            <View>
                <TextInput
                    style={styles.TextInput}
                    placeholder='назва заходу'
                    value={this.state.title}
                    onChangeText={(title) => this.setState({
                        title
                    })}/>
                <Calendar
                selected={date=> this.setState({date})}/>
                <Time
                    selected={time => this.setState({
                        time
                    })}/>
                <Button
                title='Створити'
                onPress={this.saveNews}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextInput: {
        borderBottomColor: 'red',
        borderBottomWidth: 3,
    }
})


const mapDispatchToProps = (dispatch) => {
    return {
        pushNewNews: (news) => dispatch(pushNewNews(news))
    }
}

const mapSateToProps = (state) => {
    return {
        state: state.first.data
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(MainPage)