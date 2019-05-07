import React, {Component} from 'react';
import { Text, Button, StyleSheet,TextInput,CheckBox, ScrollView} from 'react-native';
import Calendar from '../calendar/calendarSecond';
import {connect} from 'react-redux'
import {pushNewNews} from '../../redux/actions/actions';
import Time from '../time/time';
import ChangeImage from '../createNews/changePhoto';
import CheckCategory from '../createNews/category';
import Header from '../header/headerCreate';

 class MainPage extends Component {

     static navigationOptions  = {
         header: null
     }

    state = {
        title: '',
        date: '',
        time: '',
        text: '',
        img: '',
        category: {
            dance: false,
            sport: false,
            it: false
        },
    }

    checkCategory = (value) => {
        this.setState({
            category: {
                ...this.state.category,
                [value]: true
            }
        })
    }

    checkTime = (chengeTime) => {
        let time = chengeTime.split('-');
        time = time.map(item=>item.length == 1?`0${item}`:item)
        time = time.join('-');
        this.setState({
            time
        })
    }

    checkData = (chengeDate) => {
        let date = chengeDate.split('-');
        date = date.map(item=>item.length == 1?`0${item}`:item);
        date = date.join('-');
        this.setState({date})
    }
    
    checkImg = (img) => {
        this.setState({img})
    }


    saveNews = () => {
        let data = this.state;
        this.props.pushNewNews(data)
    }


    render(){
        return( 
            <ScrollView>
                <Header
                    text={'Створити подію'}
                    navigation={this.props.navigation}/>
                <TextInput
                    style={styles.TextInput}
                    placeholder='назва заходу'
                    value={this.state.title}
                    onChangeText={(title) => this.setState({
                        title
                    })}/>
                <Calendar
                selected={this.checkData}/>
                <Time
                    selected={this.checkTime}/>
                <ChangeImage
                    checkImg={this.checkImg}/>
                <CheckCategory
                    checkCategory={this.checkCategory}/>
                <Button
                title='Створити'
                onPress={this.saveNews}/>
            </ScrollView>
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