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
        <div
          style={{
            height: "70px",
            width: "70px",
            backgroundColor: "white",
            borderRadius: "50%",
            display: "inline-block",
            border: "1px solid #d0d7de",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            marginRight: "30px",
          }}
        >
          pic
        </div>
        {user.firstName} {user.lastName}
      </StyledUser>
      <hr />
      <Categories />
    </>
  );
};
