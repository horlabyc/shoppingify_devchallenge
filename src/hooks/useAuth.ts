import { useState } from "react"
import { getLoggedinUser, setLoggedinUser } from "../services/storage";

export type User = {
  username: string;
  accessToken: string;
}

export const useAuth = () => {
  const user = getLoggedinUser(); 
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const logUserIn = async (user: User) => {
    setLoggedinUser(user);
    setIsLoggedIn(true);
    return true;
  }

  const logUserOut = async () => {
    localStorage.clear();
    setIsLoggedIn(false);
    return true;
  }

  return { isLoggedIn, logUserIn, logUserOut }
}