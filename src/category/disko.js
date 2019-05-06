import React, {Component} from 'react';
import CreateCategory from './creactCategory'
import { StackActions, NavigationActions } from 'react-navigation';

export default class SportPage extends Component  {

    static navigationOptions  = {
        header: null, 
    }

    render(){
        return( 
            <CreateCategory
            navigation={this.props.navigation}
            textHeader="танці"
            category='dance'
            />
        )
    }
}
