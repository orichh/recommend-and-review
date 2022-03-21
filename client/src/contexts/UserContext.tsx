import { useState, useEffect } from "react";
import { createContext } from "react";

export const UserContext: any = createContext({
  name: "",
  private_profile: false,
  bio: "",
  profile_picture: "",
  auth: false,
});

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({
    username: "",
    private_profile: false,
    bio: "",
    profile_picture: "",
    auth: false,
  });

  // Login updates the user data with a name parameter
  const login = ({ username, private_profile, bio, profile_picture }) => {
    // console.log(
    //   "🚀 ~ file: UserContext.tsx ~ line 24 ~ login ~ userInfo",
    //   data
    // );

    setUser({
      username: username,
      private_profile: private_profile,
      bio: bio,
      profile_picture: profile_picture,
      auth: true,
    });
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(() => ({
      username: "",
      private_profile: false,
      bio: "",
      profile_picture: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
