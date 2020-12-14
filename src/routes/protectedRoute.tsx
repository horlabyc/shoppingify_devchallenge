import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  component: any;
  isLoggedIn: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isLoggedIn, ...rest} = props;
  return (
    <Route { ...rest} render={(routeProps) => {
      return (
        isLoggedIn ? (
        <Component {...routeProps}/>
        ) :
        ( 
          <Redirect to={{ 
            pathname: '/auth/login', 
            state: { from: routeProps.location}}}
          />
        )
      )}
    }
    />
  )
}