import React,{Component} from 'react';
import {View, ScrollView,DrawerLayoutAndroid,RefreshControl,Button} from 'react-native';
import Header from '../header/header';
import ItemList from '../createItemList/mainCategory';
import CreateCalendar from '../calendar/calendarSecond';
import {connect} from 'react-redux';
import {addCategory} from '../../redux/actions/actions';
import ListDrawer from './ListNavigation';

class CreateCategory extends Component {
    constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    render(){
        this.props.addCategory(this.props.category);

        return (    
            <DrawerLayoutAndroid
                drawerWidth={290}
                ref={(_drawer) => this.drawer = _drawer}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => ListDrawer(this.props)}>
                        <View style={{flex:1}}>
                            <ScrollView
                                refreshControl={
                                    <RefreshControl
                                      refreshing={false}
                                      onRefresh={() => console.log('hi')}
                                    />
                                  }>
                                <Header
                                    text={this.props.textHeader}
                                    navigation={this.props.navigation}
                                    openDrawer={this.openDrawer}
                                    />
                                <CreateCalendar/>
                                <ItemList
                                    category={this.props.category}
                                    navigation={this.props.navigation}/>
                            </ScrollView>
                        </View>
            </DrawerLayoutAndroid>
        )
    }
       
}

mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => dispatch(addCategory(category))
    }
}


export default connect(null,mapDispatchToProps)(CreateCategory);