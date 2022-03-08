import { useState, useEffect } from "react";
import { createContext } from "react";

export const UserContext: any = createContext({ name: "", auth: false });

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({
    userId: null,
    firstName: "",
    lastName: "",
    email: "",
    auth: false,
  });

  // Login updates the user data with a name parameter
  const login = ({ userId, userInfo }) => {
    setUser({
      userId,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      auth: true,
    });
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(() => ({
      userId: null,
      firstName: "",
      lastName: "",
      email: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
