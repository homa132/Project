import React, {Component} from 'react';
import {Picker, StyleSheet} from 'react-native';

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
                this.onMainComponent(value)}}
                    selectedValue={this.state.value}
                    style={styles.picker}>
                <Picker.Item label='Виберіть категорію*' value='Виберіть категорію'/>
                <Picker.Item label='спорт' value='sport'/>
                <Picker.Item label='IT сфера' value='it'/>
                <Picker.Item label='танці' value='dance'/>
            </Picker>
        )
    }
}

const styles = StyleSheet.create({
    picker: {
        width: 170,
        backgroundColor: 'rgba(91, 245, 99, 0.801)',
        alignSelf: 'center',
        color: 'black',
        height: 30,
    }
})