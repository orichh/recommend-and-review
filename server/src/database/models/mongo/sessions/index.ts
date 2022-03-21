// sign up and login
import { Session } from "../index";

interface sessionData {
  session_id: String;
  user_id: String;
  expires: number;
}

export const addSession = (data: sessionData) => {
  console.log("🚀 ~ file: index.ts ~ line 11 ~ addSession ~ data", data);
  console.log("type of data expires property", typeof data.expires);

  const newUser = new Session(data);
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
