import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    // Switch: 여러개의 router 중에 딱 하나만 화면에 표시
    // Redirect: 다른 page로 옮겨주는 역할
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
