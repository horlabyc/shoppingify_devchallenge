import { setLoggedinUser } from "../services/storage";

export interface appState {
  authenticated: boolean,
  rightSideMenuType: 'shoppingList' | 'addNewItem' | 'itemDetails';
}

export const AppReducer = (state: appState, action: {type: string, payload: any}): appState => {
  switch (action.type) {
    case 'SET_USER':
      setLoggedinUser({accessToken: action.payload.accessToken, username:action.payload.username});
      return {...state, authenticated: true}
    case 'SET_RIGHT_SIDE_MENU_TYPE':
      return {...state, rightSideMenuType: action.payload}
    default:
      return state;
  }
}