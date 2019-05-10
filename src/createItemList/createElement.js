import React from 'react';
import {FlatList} from 'react-native';
import Item from './item';


function createElement (props)  {

        return (
            <FlatList
                data={props.data}
                refreshing={true}
                keyExtractor={(item, index) => `${index} ${Math.random() * 1000}`}
                renderItem={({item})=> !item?false:<Item item={item}/>}
                />
        )

            
}


export default createElement
