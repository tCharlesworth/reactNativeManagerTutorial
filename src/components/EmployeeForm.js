import React, { Component } from 'react';

import { connect }        from 'react-redux';
import { employeeUpdate } from '../actions';

import { View, Text, Picker }  from 'react-native';
import { CardItem, TextField } from './common';

class EmployeeForm extends Component {
    render() {
        return (
        <View>
            <CardItem>
                <TextField
                    autoCorrect
                    label="Name"
                    placeholder="John Doe"
                    value={this.props.name}
                    onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value })}
                />
            </CardItem>
            <CardItem>
                <TextField
                    autoCorrect
                    label="Phone"
                    placeholder="555-555-5555"
                    value={this.props.phone}
                    onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
            </CardItem>
            <CardItem style={{flexDirection: 'column'}}>
                <Text style={styles.pickerLabelStyle}>Shift</Text>
                <Picker
                    style={{flex: 1}}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Monday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </CardItem>
        </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = ( { employeeForm } ) => {
    const { name, phone, shift } =  employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);