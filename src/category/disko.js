import React, {Component} from 'react';
import CreateCategory from './creactCategory' 

export default class SportPage extends Component  {

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
