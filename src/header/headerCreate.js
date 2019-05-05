import React from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

const Header = (props) => {
    return (
        <View style={styles.headerConteiner}>
                        <View style={styles.headerButton}>
                            <Button
                                    title='Головна'
                                    onPress={()=> props.navigation.push('Main')}/>
                        </View>
                        <Text style={styles.headerText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerConteiner: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 60,
        minHeight: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "rgb(212, 212, 212)",
        borderBottomWidth: 2.6,
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerText: {
            fontSize: 25,
            alignSelf: 'center',
            color: 'red',
            letterSpacing: 5,
            marginRight: 15,
    },
    headerButton: {
        maxHeight: 35
    }
})

export default Header