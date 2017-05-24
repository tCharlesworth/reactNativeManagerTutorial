import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import { Provider }         from 'react-redux';
import  ReduxThunk          from 'redux-thunk';
import { createStore, 
         applyMiddleware }  from 'redux';
import reducers             from './reducers';
import firebase             from 'firebase';
import config               from './config.json';

import Router from './Router';

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
                <Router />
            </Provider>
        );
    }
}

export default App;