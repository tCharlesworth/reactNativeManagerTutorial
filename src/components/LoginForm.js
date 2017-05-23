import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardItem, TextField, Button } from './common';

class LoginForm extends Component {
    onEmailChange(newText) {
        this.props.emailChanged(newText);
    }
    onPasswordChange(newText) {
        this.props.passwordChanged(newText);
    }
    onButtonPress() {

    }
    render() {
        console.log(this.props);
        return (
            <Card>
                <CardItem>
                    <TextField
                        onChangeText={this.onEmailChange.bind(this)}
                        autoCorrect={false}
                        label="Email"
                        placeholder="test@gmail.com" />
                </CardItem>
                <CardItem>
                    <TextField
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        label="Password"
                        placeholder="********" />
                </CardItem>
                <CardItem>
                    <Button onPress={this.onButtonPress}>Login</Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password } = state.auth;

    return { email, password };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);