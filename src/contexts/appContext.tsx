import * as React from 'react';
import { createContext, ReactNode, useReducer } from 'react';
import { AppReducer, appState } from '../reducers/appReducer';
import { getLoggedinUser } from '../services/storage';

type Props = {
  children: ReactNode;
};

const intialState: appState = {
  authenticated: false,
}

export const AppContext = createContext<{state: appState, dispatch: React.Dispatch<any>}>({ state: intialState, dispatch: () => null});

const AuthContextProvider = (props: Props) => {
  const user = getLoggedinUser(); 
  const [ state, dispatch] = useReducer(AppReducer, {authenticated: !!user});
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AuthContextProvider;