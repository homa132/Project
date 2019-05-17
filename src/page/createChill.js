import React, {Component} from 'react';
import { View, TouchableOpacity,Text, StyleSheet,TextInput, ScrollView,Button} from 'react-native';
import Calendar from '../calendar/calendarSecond';
import {connect} from 'react-redux'
import {pushNewNews} from '../../redux/actions/actions';
import Time from '../time/time';
import ChangeImage from '../createNews/changePhoto';
import CheckCategory from '../createNews/category';
import Header from '../header/headerCreate';
import firebase from 'react-native-firebase';

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            dateTime: 0,
            title: '',
            date: '',
            time: '',
            text: '',
            category: {
                dance: false,
                sport: false,
                it: false
            },
            place: '',
            contacts: {
                telegrame: '',
                viber: '',
                inst: '',
                mobileNumber: '',
                site: ''
            },
            urlImg: []
        }
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
        imgOnServer = img;
    }

    newDataTime = () => {
        const newDateTime = [];
        const {date,time} = this.state;
        date.split('-').forEach(item=> newDateTime.push(item));
        time.split('-').forEach(item=> newDateTime.push(item));
        let dateTime = newDateTime.join('');
        this.setState({dateTime})
    }

    saveNews = async () => {
        this.newDataTime();
        let urlImg = [];
        for(let i =0; i < imgOnServer.length;i++){
            let images = await  firebase.storage().ref(`images/${this.state.dateTime}/${i}`)
            .putFile(imgOnServer[i].path);
            urlImg.push(images.downloadURL);
        }
        this.setState({urlImg});
        firebase.firestore().collection('data').doc(this.state.dateTime).set(this.state);
        this.setState({ dateTime: 0,title: '',date: '',time: '',text: '',place: '',urlImg: [],
            category: {dance: false,sport: false,it: false},
            contacts: {telegrame: '',viber: '',inst: '',mobileNumber: '',site: ''},
            })
    }


    render(){
        return( 
                <ScrollView style={styles.mainConteiner}>
                    <Header
                        text={'Створити подію'}
                        navigation={this.props.navigation}/>
                    <View style={styles.conteinerItem}>
                        <TextInput
                            style={styles.TextInputTitle}
                            placeholder='назва заходу'
                            value={this.state.title}
                            onChangeText={(title) => this.setState({title})}/>
                        <ChangeImage
                            checkImg={this.checkImg}/>
                        <View style={{flexDirection: 'row'}}>
                            <Calendar
                                selected={this.checkData}
                                twoBottom={false}/>
                            <Time
                                selected={this.checkTime}/>
                        </View>
                        <CheckCategory
                            checkCategory={this.checkCategory}/>
                        <TouchableOpacity
                            onPress={this.saveNews}
                            style={styles.buttonSave}>
                            <Text style={styles.textSave}>СТВОРИТИ</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        )
    }
}
// Потрібно для відправки на сервер фото
let imgOnServer = [];


const styles = StyleSheet.create({
    TextInputTitle: {
        width: '80%',
        height: 30,
        borderColor: 'rgba(0, 0, 0, 0.315)',
        borderWidth: 2,
        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.7)',
        padding: 0,
        borderRadius: 0.3,
        marginBottom: 7
    },
    mainConteiner: {
        backgroundColor: 'rgb(238, 253, 243)',
        borderColor: 'rgba(11, 75, 27, 0.5)',
        borderWidth: 3,
        width: '100%',
    },
    conteinerItem: {
        borderColor: 'rgba(183, 248, 199, 0.74)',
        borderWidth: 5,
        marginHorizontal: 5,
        backgroundColor: 'rgba(3, 250, 65, 0.4)',
        marginBottom:5,
        padding: 10,
        borderRadius: 0.5,
        marginVertical: 5,
    },
    buttonSave: {
        width: '50%',
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 1
    },
    textSave: {
        fontSize: 20,
        letterSpacing: 4,
        color: 'rgba(255, 255, 255, 0.836)',
        fontWeight: 'bold',
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