import { useState } from "react";
import { createContext } from "react";

export const UserContext: any = createContext({ name: "", auth: false });

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ name: "", auth: false });

  // Login updates the user data with a name parameter
  const login = (name) => {
    setUser((user) => ({ name: name, auth: true }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({ name: "", auth: false }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
