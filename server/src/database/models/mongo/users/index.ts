// sign up and login
import { User } from "../index";

interface UserData {
  first_name: String;
  last_name: String;
  username: String;
  email: String;
  password: String;
}

export const addUser = (data: UserData) => {
  console.log("🚀 ~ file: index.ts ~ line 59 ~ addUser ~ data", data);

  const defaults = {
    private_profile: false,
    bio: "",
    profile_picture: "",
  };
  const merged = { ...data, ...defaults };
  const newUser = new User(merged);
  return newUser.save();
};

// const testUser = new User({
//   name: "richard",
// });
// testUser.save();

// sign up
// check if user exists
// add user if not
// need user document schema

// login
