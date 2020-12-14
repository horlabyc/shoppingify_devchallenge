import * as React from "react";
import { Route, useHistory } from "react-router-dom";

export const RestrictedRoute = (props: any) => {
  const { component: Component, isLoggedIn, ...rest} = props;
  let history = useHistory();
  return(
    <Route {...rest} render={(routeProps) => {
      return (
        !isLoggedIn ? (
          <Component {...routeProps}/>
        ) : (
          history.goBack()
        )
      )
    }}/>
  )
}