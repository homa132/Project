import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../header/header';
import ItemList from '../createItemList/mainCategory';
import CreateCalendar from '../calendar/calendarSecond';
import {connect} from 'react-redux'
import {addCategory} from '../../redux/actions/actions';

function CreateCategory (props)  {

    props.addCategory(props.category)

        return (
            <View>
                <ScrollView>
                    <Header
                        text={props.textHeader}
                        navigation={props.navigation}/>
                    <CreateCalendar/>
                    <ItemList
                        category={props.category}
                        navigation={props.navigation}/>
                </ScrollView>
            </View>
        )
}

mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => dispatch(addCategory(category))
    }
}


export default connect(null,mapDispatchToProps)(CreateCategory);