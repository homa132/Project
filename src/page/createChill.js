import React, {Component} from 'react';
import { View, TouchableOpacity,Text, StyleSheet,TextInput, ScrollView,Dimensions, ActivityIndicator} from 'react-native';
import Calendar from '../calendar/calendarSecond';
import {connect} from 'react-redux'
import {pushNewNews} from '../../redux/actions/actions';
import Time from '../time/time';
import ChangeImage from '../createNews/changePhoto';
import CheckCategory from '../createNews/category';
import Header from '../header/headerCreate';
import firebase from 'react-native-firebase';
import SliderImage from '../sliderImages/sliderImages'
import ContactsLinks from './contactsLinks';
import Loader from '../activityIndicator/activityIndicator'

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
            price: '',
            place: '',
            contacts: {
                telegrame: '',
                viber: '',
                inst: '',
                site: '',
            },
            urlImg: [],
            imgOnServer: ['https://firebasestorage.googleapis.com/v0/b/relaxer-a0e8f.appspot.com/o/images%2Fnoimage.jpg?alt=media&token=821454b2-2487-4c5c-9eed-f78fdde30b8d'],
            disabledButton: true,
            saving: false
        }
    }

    checkCategory = (value) => {
        this.setState({
            category: {
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
        this.setState({imgOnServer: []})
        let imgOnServer = img.map(item => item.path);
        this.setState({imgOnServer});
    }

    newDataTime = () => {
        const newDateTime = [];
        const {date,time} = this.state;
        date.split('-').forEach(item=> newDateTime.push(item));
        time.split('-').forEach(item=> newDateTime.push(item));
        let dateTime = newDateTime.join('');
        this.setState({dateTime})
    }

    saveNews =  async () => {
        this.state.saving = true;

        this.newDataTime();
        let urlImg = [];
        for(let i =0; i < this.state.imgOnServer.length;i++){
            let images = await  firebase.storage().ref(`images/${this.state.dateTime}/${i}`)
            .putFile(this.state.imgOnServer[i]);
            urlImg.push(images.downloadURL);
        }
        this.setState({urlImg});
        firebase.firestore().collection('data').doc(this.state.dateTime).set(this.state);
        this.setState(startState)
    }

    disableButton = () => {
        const {time,title,date,text,place,category,contacts,disabledButton} = this.state;
        var newDisableButton = true;
    
        if(time && title && date && text && place){
            Object.keys(category).forEach(item => {
                if(category[item]){
                    Object.keys(contacts).forEach(item => {
                        if(contacts[item]){
                            newDisableButton = false;
                        }
                    })
                }else{
                    newDisableButton = true;
                }
            })

        }else {
            newDisableButton = true;
        }

        if(newDisableButton !== disabledButton ){
            this.setState({disabledButton: newDisableButton});
            
        }

    }

    saveDataContacts = (newContacts) => {
        this.setState({contacts: newContacts});
    }

    componentDidUpdate(){
        this.disableButton();
    }

    render(){
        const {title,imgOnServer,price,text,place,disabledButton,saving} = this.state;

        return( 
                <ScrollView style={styles.mainConteiner}>
                    <Header
                        text={'Створити подію'}
                        navigation={this.props.navigation}/>
                    <View style={styles.conteinerItem}>
                        {saving?<View style={styles.loader}><Loader/><Text style={styles.loaderText}>Збереження події</Text></View>:null}

                        <Text style={[styles.textBeforInput,{alignSelf: 'center',fontSize: 22,}]}>Назва заходу*: </Text>
                        <TextInput
                            maxLength = {30}
                            multiline = {true}
                            style={styles.TextInputTitle}
                            placeholder='Ігри розуму'
                            value={title}
                            onChangeText={(title) => this.setState({title})}/>
                        <ChangeImage
                            checkImg={this.checkImg}/>
                        
                        <View style={styles.conteinerSlider}>
                            <SliderImage
                                images={imgOnServer}/>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Calendar
                                selected={this.checkData}
                                twoBottom={false}/>
                            <Time
                                selected={this.checkTime}/>
                        </View>

                        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',marginVertical:7}}>
                            <CheckCategory
                                checkCategory={this.checkCategory}/>
                            <TextInput
                                maxLength={7}
                                style={styles.TextInputPrice}
                                placeholder='ціна входу'
                                value={price}
                                onChangeText={(price) => this.setState({price})}
                                keyboardType='number-pad'/>
                        </View>

                        <Text style={styles.textBeforInput}>Деталі заходу*: </Text>
                        <TextInput
                            maxLength={500}
                            style={styles.TextInputText}
                            multiline = {true}
                            numberOfLines = {4}
                            placeholder='На Вас чекає унікальна нагода випробувати свою інтелектуальну спритність під час запеклого командного 
                                        «мозкового турніру» і допомогти зібрати стипендії для талановитих та потребуючих студентів, які завтра 
                                        поруч із нами будуть продовжувати змінювати країну.'
                            value={text}
                            onChangeText={(text) => this.setState({text})}/>

                        <Text style={styles.textBeforInput}>Місце заходу*: </Text>
                        <TextInput
                            maxLength={100}
                            style={styles.TextInputPlace}
                            multiline = {true}
                            numberOfLines = {2}
                            placeholder='Київ, вул. Баcейна 1 (метро Площа Льва Толстого)'
                            value={place}
                            onChangeText={(place) => this.setState({place})}/>
                        
                        <Text style={styles.textBeforInput}>Контакти*: </Text>
                        <ContactsLinks
                        saveDataContacts={this.saveDataContacts}
                        save={saving}/>
                        

                        <TouchableOpacity
                            onPress={this.saveNews}
                            style={disabledButton?styles.disableButton:styles.buttonSave}
                            disabled={disabledButton}>
                            <Text style={styles.textSave}>СТВОРИТИ</Text>
                        </TouchableOpacity>
                        {disabledButton?<Text style={styles.disableText}>*Заповніть всі обов'язкові поля</Text>:null}
                    </View>
                </ScrollView>
        )
    }
}

const startState = state = {
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
    price: '',
    place: '',
    contacts: {
        telegrame: '',
        viber: '',
        inst: '',
        site: '',
    },
    urlImg: [],
    imgOnServer: ['https://firebasestorage.googleapis.com/v0/b/relaxer-a0e8f.appspot.com/o/images%2Fnoimage.jpg?alt=media&token=821454b2-2487-4c5c-9eed-f78fdde30b8d'],
    disabledButton: true,
    saving: false
};


const styles = StyleSheet.create({
    TextInputTitle: {
        width: '90%',
        borderColor: 'rgba(0, 0, 0, 0.315)',
        borderWidth: 2.5,
        alignSelf: 'center',
        fontSize: 20,
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
        borderRadius: 2,
        marginTop: 7
    },
    disableButton: {
        width: '50%',
        height: 40,
        backgroundColor: 'rgba(56, 54, 54, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 2,
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 7
    },
    textSave: {
        fontSize: 20,
        letterSpacing: 4,
        color: 'rgba(255, 255, 255, 0.836)',
        fontWeight: 'bold',
    },
    conteinerSlider: {
        width: Dimensions.get('window').width,
        position: 'relative',
        left:-25,
        marginBottom: 10,
        marginTop: 5
    },
    TextInputText: {
        width: '95%',
        borderColor: 'rgba(0, 0, 0, 0.315)',
        borderWidth: 2.5,
        alignSelf: 'center',
        textAlignVertical: 'top',
        fontSize: 18,
        marginBottom: 15,
        marginTop: 7,
        paddingHorizontal: 4,
        paddingVertical: 1,
        textAlign: 'center',
    },
    TextInputPrice: {
        width: 100,
        height: 30,
        borderColor: 'rgba(0, 0, 0, 0.315)',
        borderWidth: 2.5,
        fontSize: 18,
        paddingVertical: 1.5,
        textAlign: 'center',
    },
    TextInputPlace: {
        width: '95%',
        borderColor: 'rgba(0, 0, 0, 0.315)',
        borderWidth: 2.5,
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 1,
        fontSize: 18,
        marginBottom: 10
    },
    disableText: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'red',
        marginTop: 2,
        letterSpacing: 2
    },
    textBeforInput: {
        fontSize: 20,
        color: 'black',
        letterSpacing: 3.5,
        marginBottom: 7,
        fontWeight: 'bold'
    },
    loader: {
        position: 'absolute',
        top: 1000,
        alignSelf: 'center',
        width: 250,
        height: 80,
        backgroundColor: 'rgba(72, 190, 68, 0.938)',
        zIndex: 1000,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15
    },
    loaderText: {
        fontSize: 22,
        color: 'rgba(255, 255, 255, 0.938)',
        letterSpacing: 4,
        textAlign: 'center'
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