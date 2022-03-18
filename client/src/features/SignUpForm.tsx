import { useState, useEffect } from "react";
import { getRequest, postRequest } from "../api/index";
import { useRequest } from "../hooks";
import { Checkbox, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  GenericErrorMessage,
  Loading,
  InputField,
  SubmitButton,
} from "../components";
import {
  StyledFormControlLabel,
  CheckboxSubmitWrapper,
  FormWrapper,
  PasswordFieldWrapper,
  SignUpWrapper,
  MultiFieldWrapper,
} from "./styles.css";

export const SignUpForm = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [revealPassword, setRevealPassword] = useState<Boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<Boolean>(false);
  let navigate = useNavigate();
  // const [apiDataError, setApiDataError] = useState<Boolean>(false);
  // const { data, loading, error } = useRequest(getRequest, "form"); //prettier-ignore --- custom hook

  // reset form input states after user successfully signs up
  useEffect(() => {
    if (formSubmitted === true) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setUsername("");
      setPassword("");
      setRevealPassword(false);
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  // handle user input and update state accordingly
  const handleChange = (event: any) => {
    event.preventDefault();
    const field = event.target.placeholder;
    const fieldValue = event.target.value;
    if (field === "First Name") setFirstName(fieldValue);
    if (field === "Last Name") setLastName(fieldValue);
    if (field === "Email") setEmail(fieldValue);
    if (field === "Username") setUsername(fieldValue);
    if (field === "Password") setPassword(fieldValue);
  };

  // handle user submitting form
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // validate all entries have at least one character
    const isValid = [firstName, lastName, email, username, password].every(
      (input) => input.length > 0
    );

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
    };

    if (isValid) {
      postRequest("/api/v1/signup", payload)
        .then((response) => {
          alert("Account created!");
          setFormSubmitted(true);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert("Sorry, there was an error...");
        });
    } else {
      alert("Please fill out each field");
    }
  };

  return (
    <>
      <SignUpWrapper>
        <h1 id="signup">Create your free account</h1>

        <FormWrapper>
          <MultiFieldWrapper>
            <InputField
              handleChange={handleChange}
              label="First Name"
              value={firstName}
            />
            <InputField
              handleChange={handleChange}
              label="Last Name"
              value={lastName}
            />
          </MultiFieldWrapper>
          <MultiFieldWrapper>
            <InputField
              handleChange={handleChange}
              label="Username"
              value={username}
            />
          </MultiFieldWrapper>

          <MultiFieldWrapper>
            <InputField
              handleChange={handleChange}
              label="Email"
              value={email}
            />
          </MultiFieldWrapper>

          <PasswordFieldWrapper>
            <InputField
              handleChange={handleChange}
              label="Password"
              value={password}
              revealPassword={revealPassword}
            />
          </PasswordFieldWrapper>

          <CheckboxSubmitWrapper>
            <FormGroup>
              <StyledFormControlLabel
                control={<Checkbox onChange={() => setRevealPassword(!revealPassword)}/>} //prettier-ignore
                label="Show password"
                key={formSubmitted.toString()}
              />
            </FormGroup>
            <SubmitButton handleClick={handleSubmit} label="Sign Up!" />
          </CheckboxSubmitWrapper>
        </FormWrapper>
      </SignUpWrapper>
    </>
  );
};
