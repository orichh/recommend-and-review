import { useContext } from "react";
import { Categories } from ".";
import { PrimarySearchAppBar } from "../components";
import { UserContext } from "../contexts/UserContext";
import { styled } from "@mui/styles";

const StyledUser = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "5em",
  alignItems: "center",
});

export const LoggedIn = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <PrimarySearchAppBar logout={logout} />
      <StyledUser>
        {user.firstName} {user.lastName}
      </StyledUser>
      <hr />
      <Categories />
    </>
  );
};
