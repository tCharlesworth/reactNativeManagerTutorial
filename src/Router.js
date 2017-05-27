import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm      from './components/LoginForm';
import SignupForm     from './components/SignupForm';
import EmployeeList   from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="signup">
        <Scene key="createUser" component={SignupForm} title="Signup" />
      </Scene>
      <Scene key="main">
        <Scene initial
          key="employeeList" 
          component={EmployeeList} 
          title="Employees"
          rightTitle="Add"
          onRight={ () => Actions.employeeCreate } />
      </Scene>
      <Scene 
        key="employeeCreate"
        component={EmployeeCreate}
        title="New Employee" 
      />
    </Router>
  )

};

export default RouterComponent;