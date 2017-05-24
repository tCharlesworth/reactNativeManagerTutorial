import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from './types';
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
            .then(user => { loginUserSuccess(dispatch, user); })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => { loginUserSuccess(dispatch, user); })
                    .catch(() => { loginUserFailure(dispatch); });
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFailure = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    });
};