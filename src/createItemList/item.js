import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SliderImage from '../sliderImages/sliderImages'

export default class Item extends Component {

    state = {
        more: false
    }

    render(){
        const { urlImg, date, title,category,time,text} = this.props.item;
        const key = Object.keys(category);
        
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
                
                {this.state.more?
                <React.Fragment>
                    <TouchableOpacity
                        onPress={ () => this.setState({more:!this.state.more})}
                        style={styles.conteinerMore}>
                        <Icon name='up' size={20} color="#FFFFFF" />
                        <Text style={styles.textMore}>ЗАКРИТИ</Text>
                    </TouchableOpacity>
                    <Text style={styles.date}>{text}</Text>
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
    },
    conteinerMore: {
        width: 115,
        backgroundColor: 'rgba(0, 59, 15, 0.842)',
        height: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: 'rgba(0, 59, 15, 0.5)',
        borderWidth: 3,
        flexDirection: 'row',
        marginVertical: 3,
    },
    textMore: {
        color: 'rgba(255, 255, 255, 0.842)',
        fontSize: 17,
        letterSpacing: 2,
    },
    conteinerSlider: {
        width: Dimensions.get('window').width,
        position: 'relative',
        left:-15,

    }
})