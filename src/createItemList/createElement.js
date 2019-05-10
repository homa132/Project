import React,{Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {filterData,getData,setReservData} from '../../redux/actions/actions';
import Item from './item';


class createElement extends Component  {

    constructor(props){
        super(props);
        this.state = {
            FilterData: props.state.filterData,
            data: props.state.data
        };
        this.filter()
        console.log(props.state.data)
    }

    filter = async () => {
        console.log('render')
        if(!this.props.state.data){
            await this.props.getData();
        }
        console.log(this.props.state.data);
        let { data } = this.props.state;
        
        // Сортировка по категории
        if(this.props.state.category == 'all'){

        }else {
            data = data.filter(item => {
                return item.category[this.props.state.category]
            })
        }

        let timeJoin = [];

        // Сортировка по  дате
        if(data[0]){
            if(!data[0].filterDate){
                data.forEach((item) =>{
                    let date = [];
                    item.date.split('-').forEach(item=> date.push(item));
                    item.time.split('-').forEach(item=> date.push(item));
                    timeJoin.push(date.join(''));
                    data.forEach((item,index)=> {
                        item == null? null: item.filterDate = timeJoin[index]
                        })
                })
            }
            data.sort(function(a,b){
                return Number(b.filterDate) - Number(a.filterDate)
              })
        }

        await this.props.filterData(data);
        await this.props.setReservData(data);
    }


     render(){
        return (
            <FlatList
                data={this.props.state.filterData}
                refreshing={true}
                keyExtractor={(item, index) => `${index} ${Math.random() * 1000}`}
                renderItem={({item})=> !item?false:<Item item={item}/>}
                />
        )
     }
            
}

mapStateToProps = (state) => {
    return {
        state: state.first
    }
}
mapDispatchToProps = (dispatch) => {
    return { 
        filterData: (data) => dispatch(filterData(data)),
        getData: () => dispatch(getData()),
        setReservData: (data) => dispatch(setReservData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(createElement) ;
