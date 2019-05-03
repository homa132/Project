import React from 'react';
import {View, Button,Text, StyleSheet} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

const Header = (props) => {
    return (
        <View style={styles.headerConteiner}>
                        <View style={styles.headerButton}>
                            <Button
                                    title='категорії'
                                    onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                        </View>
                            <Text style={styles.headerText}>{props.text}</Text>
                        <View style={styles.headerButton}>
                            <Button
                                    title='cтворити '
                                    onPress={() => props.navigation.navigate('Create')}/>
                        </View>
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
    },
    headerText: {
            fontSize: 25,
            alignSelf: 'center',
            color: 'red',
            letterSpacing: 5
    },
    headerButton: {
        maxHeight: 35
    }
})

export default Header