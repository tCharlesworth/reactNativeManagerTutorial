import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_STARTED } from './types';
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