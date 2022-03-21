// sign up and login
import { Session } from "../index";

interface sessionData {
  session_id: String;
  user_id: String;
  expires: Date;
}

export const addSession = (data: sessionData) => {
  console.log("🚀 ~ file: index.ts ~ line 11 ~ addSession ~ data", data);
  // console.log("type of data expires property", typeof data.expires);

  const newUser = new Session(data);
  return newUser.save();
};
