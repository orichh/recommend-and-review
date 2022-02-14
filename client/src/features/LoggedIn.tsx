import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const LoggedIn = () => {
  const { user, lists, logout } = useContext(UserContext);

  return (
    <>
      <button onClick={logout}>logout</button>
      <h1>Welcome back, {user.firstName}</h1>
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
