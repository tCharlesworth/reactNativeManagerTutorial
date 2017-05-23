import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import reducers             from './reducers';
import firebase             from 'firebase';
import config               from './config.json';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp(config.firebase);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText="TiTle" />
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;