import { useContext } from "react";
import { Header, PrimarySearchAppBar } from "../components";
import { UserContext } from "../contexts/UserContext";
import { Profile } from "./Profile";

export const LoggedIn = () => {
  const { user, lists, logout } = useContext(UserContext);

  return (
    <>
      <PrimarySearchAppBar logout={logout} />
      <Profile />
      <div>
        <ol>
          {lists.map((element, index, array) => {
            return (
              <li key={element.id + element.name}>
                {element.name} {element.rating} {element.date_added}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
