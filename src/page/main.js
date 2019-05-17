import React, {Component} from 'react';
import {  StyleSheet, View} from 'react-native';
import CreateCategory from '../category/creactCategory'
import {connect} from 'react-redux'
import {getData,GetNewData} from '../../redux/actions/actions';
import firebase from 'react-native-firebase';

class MainPage extends Component {
    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('data');
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    
    
    onCollectionUpdate =  (querySnapshot) => {
        const data = [];
         querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        
         this.setState({data})
         this.props.GetNewData(data);
    }

    render(){

        if(this.props.state.newData){
            return ( 
                <View style={styles.conteiner}>
                        <CreateCategory
                        navigation={this.props.navigation}
                        textHeader="Всі події"
                        category='all'
                        />
                </View>
            )
        }else {
            return null
        }
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
        getData:  () =>  dispatch(getData()),
        GetNewData: (data) => dispatch(GetNewData(data))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);