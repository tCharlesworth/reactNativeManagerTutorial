import React, { Component } from 'react';
import { Card, CardItem, TextField } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <TextField
                        autoCorrect
                        label="Name"
                        placeholder="John Doe"
                    />
                </CardItem>
                <CardItem>
                    <TextField
                        autoCorrect
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </CardItem>
                <CardItem>
                </CardItem>
                <CardItem>
                    <Button>Create</Button>
                </CardItem>
            </Card>
        );
    }
}

export default EmployeeCreate;