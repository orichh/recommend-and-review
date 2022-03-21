import Joi from "joi";
import * as bcrypt from "bcrypt";
import { getUserLists, getPasswordForUser } from "../database/models";
import { addSession, User } from "../database/models/mongo";
import { createToken } from "../middleware/jwt";

const userSchema = Joi.object({
  email: Joi.string().email().required(), // check valid email
  password: Joi.string().required(), // check password is present
});

export const login = async (req: any, res: any) => {
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
        console.log(
          "entire request session object",
          req.session.cookie._expires
        );
        console.log("request session id", req.session.id);
        req.session.isAuth = true;
        const expireDate = new Date(req.session.cookie._expires);
        const expireTime = expireDate.getTime();
        addSession({
          session_id: req.session.id,
          user_id: user._id,
          expires: expireTime,
        });
        // expires -> req.session.cookie._expires

        // console.log("request session object 🤡", req.session);
        // console.log("session id", req.session.id);
        res.status(200).send({
          username: user.username,
          private_profile: user.private_profile,
          bio: user.bio,
          profile_picture: user.profile_picture,
        });
      }
    } catch (error) {
      console.log("🚀 ~ file: login.ts ~ line 65 ~ login ~ error", error);
      res.send("email or password incorrect").status(400);
    }
  } else {
    res.send("please fill out all fields").status(400);
  }
};
