import { Link } from "react-router-dom";
import { Login } from "../features";

export const Home = (props: any) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Login />
      <br />
      <Link to="/signup" id="signup-link">
        sign up!
      </Link>
    </div>
  );
};
