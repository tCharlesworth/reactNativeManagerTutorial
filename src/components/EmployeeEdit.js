import _                    from 'lodash';
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { employeeUpdate, 
         employeeSave }     from '../actions';

import { Card, CardItem, Button } from './common';
import EmployeeForm                  from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardItem>
            </Card>

        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);