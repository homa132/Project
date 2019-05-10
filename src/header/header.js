import React from 'react';
import {View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = (props) => {

    
    return (
        <View style={styles.headerConteiner}>
                    <BoxShadow setting={shadowButton}>
                        <TouchableOpacity style={styles.buttonConteiner}
                        onPress={()=>props.openDrawer()}>
                            <Icon name='filter-list' size={35} color="#000000" />                  
                        </TouchableOpacity>
                    </BoxShadow>
                            <Text style={styles.headerText}>{props.text}</Text>
                    <BoxShadow setting={shadowButton}>
                        <TouchableOpacity style={styles.buttonConteiner}
                         onPress={() => props.navigation.navigate('Create')}>
                            <Icon name='fiber-new' size={35} color="#000000" />                  
                        </TouchableOpacity>
                    </BoxShadow>
        </View>
    )
}

const styles = StyleSheet.create({
    headerConteiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'rgb(238, 253, 243)',
        paddingVertical: 10,
        borderBottomColor: 'rgba(11, 75, 27, 0.5)',
        borderBottomWidth: 3,
    },
    headerText: {
            fontSize: 27,
            alignSelf: 'center',
            color: 'rgba(0, 0, 0, 0.781)',
            letterSpacing: 5,
            fontWeight: 'bold',
    },
    buttonConteiner: {
        width: 45,
        height: 45,
        backgroundColor: 'rgb(165, 247, 192)',
        borderColor:'rgb(190, 248, 209)',
        borderWidth: 5,
        borderRadius: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const shadowButton = {
    width:45,
    height:45,
    color:'#00FF00',
    border:5,
    radius:5,
    opacity:0.3,
    x:0,
    y:0,
    style: {marginHorizontal: 20}
}

export default Header