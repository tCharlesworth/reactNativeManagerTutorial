import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignupReducer from './SignupReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    signup: SignupReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});