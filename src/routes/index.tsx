import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { AppContext } from '../contexts/appContext';
import LoginPage from '../pages/auth/login/login';
import RegisterPage from '../pages/auth/register/register';
import HistoryPage from '../pages/history/history';
import HomePage from '../pages/home/home';
import { PrivateRoute } from './protectedRoute';
import { RestrictedRoute } from './restrictedRoute';

const Routes = () => {
  const { state } = useContext(AppContext);
  console.log({app: state.authenticated})
  return (
    <BrowserRouter>
      <Switch>
        <RestrictedRoute isLoggedIn={state.authenticated} path="/auth/login" exact component={LoginPage}></RestrictedRoute>
        <RestrictedRoute isLoggedIn={state.authenticated} path="/auth/register" exact component={RegisterPage}></RestrictedRoute>
        <PrivateRoute isLoggedIn={state.authenticated} path="/history" exact component={HistoryPage}></PrivateRoute>
        <PrivateRoute isLoggedIn={state.authenticated} path="/home" exact component={HomePage}></PrivateRoute>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;