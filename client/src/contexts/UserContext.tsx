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
  const [lists, setLists] = useState([]);

  // Login updates the user data with a name parameter
  const login = ({ userId, userInfo, data }) => {
    setUser({
      userId,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      auth: true,
    });
    setLists(data);
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
    <UserContext.Provider value={{ user, lists, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
