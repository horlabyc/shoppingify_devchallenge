import { User } from "../hooks/useAuth";

export const setLoggedinUser = (user: User) => {
  localStorage.setItem('__user', JSON.stringify(user));
}

export const getLoggedinUser = () => {
  const user = localStorage.getItem('__user');
  if(user) {
    return JSON.parse(user);
  }else {
    return null;
  }
}