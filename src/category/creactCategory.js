import React,{Component} from 'react';
import {View, ScrollView,DrawerLayoutAndroid,RefreshControl,StyleSheet} from 'react-native';
import Header from '../header/header';
import ItemList from '../createItemList/createElement';
import CreateCalendar from '../calendar/calendarSecond';
import {connect} from 'react-redux';
import {filterData,setReservData} from '../../redux/actions/actions';
import ListDrawer from './ListNavigation';
import Search from '../search/search';

class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.filter();
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

    filter =  () => {
        let data = this.props.state.newData;
        data.sort((a,b) => {
            return b.dateTime - a.dateTime
        })
        // Сортировка по категории
        if(this.props.category == 'all'){
            data = data;
        }else {
            data = data.filter(item => {
                return item.category[this.props.category]
            })
        }

        this.props.filterData(data);
        this.props.setReservData(data);
    }


    render(){

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
                                      onRefresh={() => this.filter()}
                                    />
                                  }>
                                <Header
                                    text={this.props.textHeader}
                                    navigation={this.props.navigation}
                                    openDrawer={this.openDrawer}
                                    />
                                <Search/>
                                
                                <CreateCalendar
                                    selected={this.selectedData}
                                    allDataItems={this.allDataItems}
                                    twoBottom={true}
                                    />
                                <ItemList
                                    category={this.props.state.category}
                                    navigation={this.props.navigation}
                                    data={this.props.state.filterData}/>
                            </ScrollView>
                        </View>
            </DrawerLayoutAndroid>
        )
    }
}


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
        getData: () => dispatch(getData()),
        filterData: (data) => dispatch(filterData(data)),
        setReservData: (data) => dispatch(setReservData(data)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateCategory);