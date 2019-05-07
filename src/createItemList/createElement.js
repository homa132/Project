import React,{Component} from 'react';
import {View, Text,Image,FlatList,Button,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getDetailsId} from '../../redux/actions/actions';


 class createElement extends Component  {


     render(){
        let data = [];
            
        Object.keys(this.props.state.data).forEach((key)=>data.push(this.props.state.data[key]))
        let filterData = [];
        if(this.props.state.category == 'all'){
            filterData = data;
        }else {
            filterData = data.filter(item => {
                return item.category[this.props.state.category]
            })
        }

        let timeJoin = [];

        filterData.forEach((item) =>{
                let date = [];
                item.date.split('-').forEach(item=> date.push(item));
                item.time.split('-').forEach(item=> date.push(item));
                timeJoin.push(date.join(''));
                filterData.forEach((item,index)=> {
                    item == null? null: item.filterDate = timeJoin[index]
                    })
            
        })

        filterData.sort(function(a,b){
            return Number(b.filterDate) - Number(a.filterDate)
          })


        const prop = this.props;
        const element = <FlatList
                            data={filterData}
                            renderItem={({item})=>{
                                if(!item){
                                    return false
                                }
                                const { img, date, title,category,id} = item;
                                let key = Object.keys(category);
                                return (
                                    <View  style={styles.itemConteiner}>
                                        <Image 
                                        source={{uri:img ? img : '' }}
                                        style={styles.image}
                                        />
                                        <View style={styles.textData}>
                                            <Text style={styles.itemText}>{title}</Text>
                                            <Text style={styles.itemText}>{date}</Text>
                                            <Text style={styles.itemText}>Категорії:{key.map(item => {
                                               return category[item]? `${item}  `: null
                                            })}</Text>
                                        </View>
                                        <Button
                                            title='більше'
                                            onPress={() => {
                                                prop.getDetailsId(id);
                                                prop.navigation.push('Details')
                                                }}/>
                                    </View>
                                )}}
                            keyExtractor={(item, index) => `${index} ${Math.random() * 1000}`}
                            />
        return element
     }
            
}
const styles = StyleSheet.create({
    conteiner : {
        flex: 1,
    },
    itemConteiner: {
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderColor: 'rgba(46, 0, 250, 0.61)',
        borderWidth: 3,
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        minHeight: 110
    },
    image: {
        width: 100,
        height: 70,
        borderRadius: 20,
    },
    textData: {
        padding: 10,
        width: '50%'
    },
    itemText: {
        fontSize: 13,
        letterSpacing: 2.5
    }
})
mapStateToProps = (state) => {
    return {
        state: state.first
    }
}
mapDispatchToProps = (dispatch) => {
    return { 
        getDetailsId: (item) => dispatch(getDetailsId(item)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(createElement) ;