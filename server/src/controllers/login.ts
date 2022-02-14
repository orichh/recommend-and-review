import { getPasswordForUser } from "../database/models/login";
import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().required(), // check valid email
  password: Joi.string().required(), // check password is present
});

export const login = (req: any, res: any) => {
  // validate user submitted info
  const { error, value } = userSchema.validate(req.body);

  if (error === undefined) {
    const { email, password } = value;
    getPasswordForUser(email)
      .then((response: any) => {
        const userPassword = response.rows[0].password;
        if (userPassword === password) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      })
      .catch((error: any) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(400);
  }
};
