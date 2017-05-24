import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import { Provider }         from 'react-redux';
import  ReduxThunk          from 'redux-thunk';
import { createStore, 
         applyMiddleware }  from 'redux';
import reducers             from './reducers';
import firebase             from 'firebase';
import config               from './config.json';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor(props) {
        super(props); 
        // Initialize Firebase
        firebase.initializeApp(config.firebase);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ store }>
                <View>
                    <Header headerText="TiTle" />
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;