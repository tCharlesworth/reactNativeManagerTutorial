import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SUCCESS } from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(()=>employeeCreateSuccess(dispatch));
    };
};

const employeeCreateSuccess = (dispatch) => {
    Actions.employeeList({type: 'reset'});
    dispatch({
        type: EMPLOYEE_CREATE_SUCCESS
    })
}