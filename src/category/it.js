import React, {Component} from 'react';
import CreateCategory from './creactCategory'

export default class SportPage extends Component {
    static navigationOptions = {
        title: 'IT сфера'
    }

    render(){
        return( 
            <CreateCategory
            navigation={this.props.navigation}
            textHeader="it сфера"
            category='it'
            />
        )
    }
}

