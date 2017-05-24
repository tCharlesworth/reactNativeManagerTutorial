import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardItem, TextField, Button } from './common';

class LoginForm extends Component {
    onEmailChange(newText) {
        this.props.emailChanged(newText);
    }
    onPasswordChange(newText) {
        this.props.passwordChanged(newText);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({email, password})
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
                        placeholder="test@gmail.com"
                        value={this.props.email} />
                </CardItem>
                <CardItem>
                    <TextField
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        label="Password"
                        placeholder="********" 
                        value={this.props.password}/>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { email, password, user } = state.auth;

    return { email, password, user };
}

export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(LoginForm);