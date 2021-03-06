import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAILED, 
    LOGIN_USER_STARTED } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    error: '', 
    loading: false, 
    user: null 
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            const { email, uid } = action.payload;
            return { ...state, ...INITIAL_STATE, user: {email, uid} };
        case LOGIN_USER_FAILED:
            return { ...state, error: 'Authentication Failed', password: '', loading: false };
        case LOGIN_USER_STARTED:
            return { ...state, error: '', loading: true };
        default:
            return state;
    }
}