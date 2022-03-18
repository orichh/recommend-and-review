import { useEffect, useContext } from "react";
import { Login } from "../features";
import { UserContext } from "../contexts/UserContext";
import { UserFeed } from "../features/UserFeed";

export const Feed = (props: any) => {
  const { user } = useContext(UserContext);

  return user.auth ? <UserFeed /> : <Login />;
};
