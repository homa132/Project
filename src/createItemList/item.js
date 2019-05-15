import React, {Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SliderImage from '../sliderImages/sliderImages'

export default class Item extends Component {

    state = {
        more: false
    }

    render(){
        const { img, date, title,category,time,text} = this.props.item;
        const key = Object.keys(category);
        
        return (
            <View style={styles.conteiner}>
                <Text style={styles.title}>{title}</Text>
                <View style={{width: Dimensions.get('window').width, position: 'relative',left:-20}}>
                    <SliderImage
                        images={img}/>
                </View>
                <Text style={styles.date}>Категорія: {key.map(item => {
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
                    onPress={ () => this.setState({more:!this.state.more})}
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
        borderColor: 'rgba(183, 248, 199, 0.74)',
        borderWidth: 5,
        marginHorizontal: 5,
        backgroundColor: 'rgba(3, 250, 65, 0.4)',
        marginBottom:5,
        padding: 10,
        borderRadius: 0.5,
    },
    image : {
        width: 200,
        height: 200,
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: 3,
    },
    title: {
        color: 'black',
        fontSize: 22,
        alignSelf: 'center',
        letterSpacing: 4.5,
        fontWeight: 'bold',
    },
    date : {
        color: 'black',
        fontSize: 17,
        marginBottom: 2,
        marginRight: 15,
        letterSpacing: 2.5,
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
    }
})