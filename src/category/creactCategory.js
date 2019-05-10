import React,{Component} from 'react';
import {View, ScrollView,DrawerLayoutAndroid,RefreshControl,StyleSheet} from 'react-native';
import Header from '../header/header';
import ItemList from '../createItemList/createElement';
import CreateCalendar from '../calendar/calendarSecond';
import {connect} from 'react-redux';
import {addCategory,getData,filterData} from '../../redux/actions/actions';
import ListDrawer from './ListNavigation';

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        props.addCategory(props.category);
    }

    openDrawer() {
        this.drawer.openDrawer();
    }

    selectedData = (data) => {
        const {state,filterData} =this.props;
        const newData = data.split('-').map((item) => item.length == 1?`0${item}`: item).join('-');
        const datas = state.reservFilterData.filter((item) => item.date == newData);
        filterData(datas);
    }

    allDataItems = () => {
        const {state,filterData} =this.props;
        filterData(state.reservFilterData);
    }

    render(){
        console.log(this.props.state.data)
        return (    
            <DrawerLayoutAndroid
                drawerWidth={290}
                ref={(_drawer) => this.drawer = _drawer}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => ListDrawer(this.props)}>
                        <View style={styles.mainConteiner}>
                            <ScrollView
                                refreshControl={
                                    <RefreshControl
                                      refreshing={false}
                                      onRefresh={() => {this.props.getData();
                                                    console.log('revers')}}
                                    />
                                  }>
                                <Header
                                    text={this.props.textHeader}
                                    navigation={this.props.navigation}
                                    openDrawer={this.openDrawer}
                                    />
                                <CreateCalendar
                                    selected={this.selectedData}
                                    allDataItems={this.allDataItems}
                                    twoBottom={true}
                                    dataForUpdate={this.props.state.data}
                                    />
                                <ItemList
                                    category={this.props.category}
                                    navigation={this.props.navigation}/>
                            </ScrollView>
                        </View>
            </DrawerLayoutAndroid>
        )
    }
}

let reservData = false;

const styles = StyleSheet.create({
    mainConteiner: {
        backgroundColor: 'rgb(238, 253, 243)',
        borderColor: 'rgba(11, 75, 27, 0.5)',
        borderWidth: 3,
        width: '100%',
        height: '100%'
    }
})


mapStateToProps =(state) => {
    return {
        state: state.first
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => dispatch(addCategory(category)),
        getData: () => dispatch(getData()),
        filterData: (data) => dispatch(filterData(data)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateCategory);