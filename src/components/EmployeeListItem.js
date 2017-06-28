import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardItem } from './common';

class EmployeeListItem extends Component {
    onClickRow() {
        console.log('CLICK');
        Actions.employeeEdit({employee: this.props.employee});
    }
    render() {
        const { name } = this.props.employee;

        return (
            <CardItem>
                <TouchableWithoutFeedback onPress={this.onClickRow.bind(this)}>
                    <Text style={styles.titleStyle}>
                        {name}
                    </Text>
                </TouchableWithoutFeedback>
            </CardItem>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;