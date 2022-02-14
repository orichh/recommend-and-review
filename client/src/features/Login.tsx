import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { InputField, SubmitButton } from "../components";
import {
  FormWrapper,
  SignUpWrapper,
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
} from "./styles.css";
import { FormGroup, Checkbox } from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [revealPassword, setRevealPassword] = useState<Boolean>(false);
  const { login } = useContext(UserContext);

  // handle user input and update state accordingly
  const handleChange = (event: any) => {
    event.preventDefault();
    const field = event.target.placeholder;
    const fieldValue = event.target.value;
    if (field === "Email") setEmail(fieldValue);
    if (field === "Password") setPassword(fieldValue);
  };

  const handleSubmit = (event: any) => {
    login("Richard");
  };

  return (
    <>
      <h1>Welcome!</h1>
      <SignUpWrapper>
        <FormWrapper>
          <InputField handleChange={handleChange} label="Email" value={email} />
          <InputField
            handleChange={handleChange}
            label="Password"
            value={password}
            revealPassword={revealPassword}
          />
          <CheckboxSubmitWrapper>
            <FormGroup>
              <StyledFormControlLabel
                control={<Checkbox onChange={() => setRevealPassword(!revealPassword)}/>} //prettier-ignore
                label="Show password"
              />
            </FormGroup>
            <SubmitButton handleClick={handleSubmit} label="Login" />
          </CheckboxSubmitWrapper>
        </FormWrapper>
      </SignUpWrapper>
      <br />
      <Link to="/signup" id="signup-link">
        sign up!
      </Link>
    </>
  );
};
