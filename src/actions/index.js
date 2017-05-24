import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = (pword) => {
    return {
        type: PASSWORD_CHANGED,
        payload: pword
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: user
                });
            });
    };
};