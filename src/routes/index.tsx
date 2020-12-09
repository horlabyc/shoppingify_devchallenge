import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/auth/login/login';
import RegisterPage from '../pages/auth/register/register';
import HomePage from '../pages/home/home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/auth/login" exact component={LoginPage}></Route>
        <Route path="/auth/register" exact component={RegisterPage}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;