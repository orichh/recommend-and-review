import { useEffect, useContext } from "react";
import { Login } from "../features";
import { UserContext } from "../contexts/UserContext";

export const Home = (props: any) => {
  const { user } = useContext(UserContext);

  return user.auth ? <div>hello</div> : <Login />;
};
