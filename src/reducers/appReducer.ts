import { setLoggedinUser } from "../services/storage";

export interface appState {
  authenticated: boolean
}

export const AppReducer = (state: appState, action: {type: string, payload: any}): appState => {
  switch (action.type) {
    case 'SET_USER':
      setLoggedinUser({accessToken: action.payload.accessToken, username:action.payload.username});
      return {...state, authenticated: true}
    default:
      return state;
  }
}