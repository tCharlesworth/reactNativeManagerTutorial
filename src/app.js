import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import reducers             from './reducers';
import firebase             from 'firebase';
import config               from './config.json';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp(config.firebase);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello World!</Text>
                </View>
            </Provider>
        );
    }
}

export default App;