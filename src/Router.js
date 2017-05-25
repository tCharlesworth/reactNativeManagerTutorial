import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm    from './components/LoginForm';
import SignupForm   from './components/SignupForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>
      <Scene key="signup" initial>
        <Scene key="createUser" component={SignupForm} title="Signup" />
      </Scene>
      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Router>
  )

};

export default RouterComponent;