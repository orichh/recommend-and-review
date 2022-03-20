import Joi from "joi";
import * as bcrypt from "bcrypt";
import { getUserLists, getPasswordForUser } from "../database/models";
import { User } from "../database/models/mongo";
import { createToken } from "../middleware/jwt";

const userSchema = Joi.object({
  email: Joi.string().email().required(), // check valid email
  password: Joi.string().required(), // check password is present
});

export const login = async (req: any, res: any) => {
  console.log("line 13", req.signedCookies["access-token"]);
  // validate user submitted info
  const { error, value } = userSchema.validate(req.body);

  // check if request body is valid
  if (error === undefined) {
    const { email, password } = value;

    // get password for given email and check if it's correct
    // postgres SQL model
    // getPasswordForUser(email)
    //   .then((response: any) => {
    //     const userPassword = response.rows[0].password;
    //     const userId = response.rows[0].id;
    //     const firstName = response.rows[0].first_name;
    //     const lastName = response.rows[0].last_name;
    //     const email = response.rows[0].email;
    //     const username = response.rows[0].username;

    //     // if password matches, send back user id and user's lists
    //     if (userPassword === password) {
    //       const payload = {
    //         userId,
    //         userInfo: { firstName, lastName, email, username },
    //       };
    //       res.send(payload);
    //     } else {
    //       res.sendStatus(401);
    //     }
    //   })
    //   .catch((error: any) => {
    //     res.sendStatus(500);
    //   });
    try {
      let user = await User.findOne({ email: value.email });
      console.log("🚀 ~ file: login.ts ~ line 47 ~ login ~ user", user);

      let passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch === true) {
        const { username } = user;
        const accessToken = await createToken(user._id);
        res.clearCookie("access-token");
        res.cookie("access-token", accessToken, {
          maxAge: 30 * 60 * 60 * 24 * 1000,
          httpOnly: true,
          signed: true,
        });
        console.log(res.cookie);
        res.sendStatus(200);
      }
    } catch {
      res.send("email or password incorrect").status(400);
    }
  } else {
    res.send("please fill out all fields").status(400);
  }
};
