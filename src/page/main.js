import React, {Component} from 'react';
import {  StyleSheet, View} from 'react-native';
import CreateCategory from '../category/creactCategory'
import {connect} from 'react-redux'
import {getData} from '../../redux/actions/actions';

class MainPage extends Component {

    static navigationOptions  = {
        header: null, 
    }



    render(){
        return ( 
            <View style={styles.conteiner}>
                    <CreateCategory
                    navigation={this.props.navigation}
                    textHeader="Всі події"
                    category='all'
                    />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        width: '100%',
    },
})

mapStateToProps = (state) => {
    return {
        state: state.first
    }
}
mapDispatchToProps = (dispatch) => {
    return { 
        getData:  () =>  dispatch(getData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);