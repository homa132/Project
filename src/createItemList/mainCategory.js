import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getDetailsId,getData} from '../../redux/actions/actions';
import CreateElement from './createElement'

 class MainCategoty extends Component{

    componentWillMount(){
        this.props.getData();

    }

    render(){
        return (
            <View style={styles.conteiner}>
                <CreateElement
                    navigation={this.props.navigation}
                    />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    conteiner : {
        flex: 1,
    },
})

mapStateToProps = state => {
    return {
        state: state.first
    }
}

mapDispatchToProps = (dispatch) => {
    return { 
        getDetailsId: (item) => dispatch(getDetailsId(item)),
        getData:  () =>  dispatch(getData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainCategoty)  