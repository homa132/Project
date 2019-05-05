import React, {Component} from 'react';
import {Picker} from 'react-native';

export default class CheckCategory extends Component {

    state = {
        value: 'Виберіть категорію'
    }

    onMainComponent = (value) => {
        this.props.checkCategory(value)
    }


    render() {
        return (
            <Picker onValueChange={(value,index) => {
                this.setState({value})
                this.onMainComponent(value)
                    }} selectedValue={this.state.value} >
                <Picker.Item label='Виберіть категорію' value='Виберіть категорію'/>
                <Picker.Item label='sport' value='sport'/>
                <Picker.Item label='it' value='it'/>
                <Picker.Item label='dance' value='dance'/>
            </Picker>
        )
    }
}