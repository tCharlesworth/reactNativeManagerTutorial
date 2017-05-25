import { 
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_STARTED,
    CREATE_EMAIL_CHANGED, CREATE_PASSWORD_CHANGED, CREATE_USER_STARTED, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from './types';
import { Actions } from 'react-native-router-flux';
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
        dispatch({ type: LOGIN_USER_STARTED });
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

    Actions.main();
};

const loginUserFailure = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED
    });
};


export const createEmailChanged = (email) => {
    return {
        type: CREATE_EMAIL_CHANGED,
        payload: email
    };
};

export const createPasswordChanged = (password) => {
    return {
        type: CREATE_PASSWORD_CHANGED,
        payload: password
    };
};

export const createUser = (dispatch) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_USER_STARTED
        });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user))
            .catch(error => createUserFailure(dispatch, error));
    };
}

const createUserSuccess = (dispatch, userData) => {
    const {email, uid} = userData;

    dispatch({
        type: CREATE_USER_SUCCESS,
        payload: {email, uid}
    });
};

const createUserFailure = (dispatch, error) => {
    dispatch({
        type: CREATE_USER_FAILURE,
        payload: error
    });
};