import { useContext } from "react";
import { Categories } from ".";
import { PrimarySearchAppBar } from "../components";
import { UserContext } from "../contexts/UserContext";
import { CategoryLists } from "./CategoryLists";

export const LoggedIn = () => {
  const { user, lists, logout } = useContext(UserContext);

  return (
    <>
      <PrimarySearchAppBar logout={logout} />
      <div>
        {user.firstName} {user.lastName}
      </div>
      <hr />
      <Categories />
    </>
  );
};
