import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,Linking,Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SliderImage from '../sliderImages/sliderImages'
import IconContacts from 'react-native-vector-icons/FontAwesome';

export default class Item extends Component {

    state = {
        more: false
    }

    openUrl = (url) => {
        Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
            console.log("Can't handle url: " + 'tel:+380952491906');
            } else {
            return Linking.openURL(url);
            }
        })
        .catch((err) => console.error('An error occurred', err));
    }


    links = () => {
        const {contacts} = this.props.item;
        const keys = Object.keys(contacts);
        const hawIcon= (name) => {
            if(name == 'telegrame'){return 'telegram'}
            if(name == 'viber'){return 'vimeo-square'}
            if(name == 'inst'){return 'instagram'}
            if(name == 'site'){return 'globe'}
            if(name == 'messenger'){return 'facebook'}
        }
        const hawText= (name) => {
            if(name == 'telegrame'){return 'Telegram'}
            if(name == 'viber'){return 'Viber'}
            if(name == 'inst'){return 'Instagram'}
            if(name == 'site'){return 'Сайт'}
            if(name == 'messenger'){return 'Messenger'}
        }
        return keys.map((item,index) => {
            return contacts[item] != ' '?
            <TouchableOpacity
            onPress={() => this.openUrl(contacts[item])}
            key={Math.random()}
            style={styles.openUrlButton}>
                <IconContacts size={20} color="#FFFFFF" name={hawIcon(item)}/>
                <Text style={styles.openUrlText}>{hawText(item)}</Text>
            </TouchableOpacity>:null
        })
    }

    render(){
        const { urlImg, date, title,category,time,text,place,price} = this.props.item;
        let key = Object.keys(category);
                
        return (
            <View style={styles.conteiner}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.conteinerSlider}>
                    <SliderImage
                        images={urlImg}/>
                </View>
                <Text style={[styles.date,{marginTop:20}]}>Категорія: {key.map(item => {
                            return category[item]? `${item} `: null
                        })}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.date}>Дата: {date}.</Text>
                    <Text style={styles.date}>Час: {time}.</Text>
                </View>
                <Text style={styles.textPrice}>Вхід: {price == 0?'безкоштовний.':`${price} грн.`}</Text>
                
                {this.state.more?
                <React.Fragment>
                    <TouchableOpacity
                        onPress={ () => this.setState({more:!this.state.more})}
                        style={styles.conteinerMore}>
                        <Icon name='up' size={20} color="#FFFFFF" />
                        <Text style={styles.textMore}>ЗАКРИТИ</Text>
                    </TouchableOpacity>
                    <Text style={styles.place}>МІСЦЕ ЗУСТРІЧІ: {place}</Text>
                    <Text style={styles.date}>ДЕТАЛІ ЗУСТРІЧІ: {text}</Text>
                    <Text style={styles.place}>Посилання: </Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        {this.links()}
                    </View>
                </React.Fragment>
                :

                <TouchableOpacity
                    onPress={() => this.setState({more:!this.state.more})}
                    style={styles.conteinerMore}>
                    <Icon name='down' size={20} color="#FFFFFF" />
                    <Text style={styles.textMore}>БІЛЬШЕ</Text>
                </TouchableOpacity>
                
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner : {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(3, 250, 65, 0.4)',
        marginBottom:20,
        padding: 10,
        borderRadius: 5,
    },
    title: {
        color: 'black',
        fontSize: 28,
        alignSelf: 'center',
        letterSpacing: 5,
        fontWeight: 'bold',
        marginBottom: 20
    },
    date : {
        color: 'black',
        fontSize: 20,
        marginBottom: 4,
        marginRight: 15,
        letterSpacing: 3,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    conteinerMore: {
        width: 120,
        backgroundColor: 'rgba(0, 59, 15, 0.842)',
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: 'rgba(0, 59, 15, 0.5)',
        borderWidth: 3,
        flexDirection: 'row',
        marginVertical: 3,
        borderRadius: 5
    },
    textMore: {
        color: 'rgba(255, 255, 255, 0.842)',
        fontSize: 20,
        letterSpacing: 2,
    },
    conteinerSlider: {
        width: Dimensions.get('window').width,
        position: 'relative',
        left:-15,
    },
    textPrice: {
        fontSize: 20,
        letterSpacing: 3.5,
        color: 'black',
        marginBottom: 5,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    place: {
        fontSize: 20,
        letterSpacing: 2,
        color: 'black',
        marginVertical: 10,
        fontWeight: 'bold',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    openUrlButton: {
        width: 100,
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginBottom: 7
    },
    openUrlText: {
        color: 'rgb(204, 255, 191)',
        fontSize: 17,
        marginLeft: 7,
    }
})