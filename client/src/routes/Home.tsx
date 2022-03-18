import { useEffect, useContext } from "react";
import { Login } from "../features";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components";

export const Home = (props: any) => {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("🚀 ~ file: Home.tsx ~ line 11 ~ useEffect ~ user", user);
    if (user.auth === true) {
      navigate(`/${user.username}`);
    }
  }, [user, navigate]);

  return user.auth ? <Loading /> : <Login />;
};
