import Joi from "joi";
import * as bcrypt from "bcrypt";
import { addSession, User } from "../database/models/mongo";

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

    try {
      let user = await User.findOne({ email: value.email });

      let passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch === true) {
        const { username } = user;

        req.session.isAuth = true;
        const expireDate = new Date(req.session.cookie._expires);
        addSession({
          session_id: req.session.id,
          user_id: user._id,
          expires: expireDate,
        });

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
