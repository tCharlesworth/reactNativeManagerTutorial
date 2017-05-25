import React, { Component } from 'react';

import { createEmailChanged, createPasswordChanged, createUser } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { View, Text } from 'react-native';
import { Card, CardItem, TextField, Spinner, Button, Checkbox } from './common';

class SignupForm extends Component {
    renderError() {
        if(this.props.error != '') {
            return (
                <CardItem>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </CardItem>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        } else {
            return (
                <CardItem>
                    <Button onPress={this.props.createUser}>Signup</Button>
                    <Text style={{alignSelf: 'center'}}>or</Text>
                    <Button onPress={this.onLoginPress}> Login </Button>
                </CardItem>
            )
        }
    }
    onLoginPress() {
        Actions.auth();
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <TextField 
                        label="Email"
                        placeholder="test@gmail.com"
                        onChangeText={this.props.createEmailChanged}
                        autocorrect={false} />
                </CardItem>
                <CardItem>
                    <TextField
                        label="Password"
                        placeholder="********"
                        onChangeText={this.props.createPasswordChanged} 
                        secureTextEntry />
                </CardItem>
                    <Checkbox label="Terms of Service" onValueChange={() => {}}/>
                <CardItem>
                </CardItem>
                { this.renderError() }
                { this.renderButton() }
            </Card>
        )
    }
}

const styles = {
    errorText: {
        size: 18,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = ({ signup }) => {
    const { email, password, error, loading } = signup;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    createEmailChanged, createPasswordChanged, createUser
})(SignupForm);