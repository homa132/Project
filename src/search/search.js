import React, {Component} from 'react';
import {TextInput,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {filterData} from '../../redux/actions/actions'

class Search extends Component {

    state = {
        valueForSearch: ''
    }


    searchTitile =(valueForSearch) => {
        let data = this.props.state.reservFilterData;

        if(valueForSearch){
            this.setState({valueForSearch});
            const arrayValueForSearch = valueForSearch.trim().toLowerCase().split('');
            const lengthValue = arrayValueForSearch.length;
            const newFilterData = data.filter(item => {
                let boolen = false;
                let arrayTitle = item.title.trim().toLowerCase().split(' ');
                let arrayWithBoolen = arrayTitle.map(item => {
                    let _i = [];
                    for(let i = 0; i< lengthValue; i++){
                        if(item.split('',lengthValue)[i] == arrayValueForSearch[i]){
                            _i.push(true)
                        }
                    }
                    return _i.length == lengthValue
                });
                arrayWithBoolen.forEach(item => {
                    item?boolen = true:null
                });
               return boolen;
            })
            this.props.filterData(newFilterData);
        }else {
            this.setState({valueForSearch});
            this.props.filterData(data);
        }
    }

    render(){
        return (
            <TextInput
            value={this.state.valueForSearch}
            onChangeText = {(valueForSearch) => this.searchTitile(valueForSearch)}
            style={styles.input}
            />
        )
    }
}

mapStateToProps =(state) => {
    return {
        state: state.first
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        filterData: (data) => dispatch(filterData(data)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);

const styles = StyleSheet.create({
    input: {
        borderColor: 'red',
        borderWidth: 1,
        width: '75%',
        alignSelf: 'center',
        paddingVertical: 0.5,
        marginBottom: 15,
    }
})