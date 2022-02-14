import { getPasswordForUser, getUserLists } from "../database/models/login";
import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().required(), // check valid email
  password: Joi.string().required(), // check password is present
});

export const login = (req: any, res: any) => {
  // validate user submitted info
  const { error, value } = userSchema.validate(req.body);

  // check if request body is valid
  if (error === undefined) {
    const { email, password } = value;

    // get password for given email and check if it's correct
    getPasswordForUser(email)
      .then((response: any) => {
        const userPassword = response.rows[0].password;
        const userId = response.rows[0].id;

        // if password matches, send back user id and user's lists
        if (userPassword === password) {
          getUserLists(userId)
            .then((response: any) => {
              const payload = { userId: userId, data: response.rows };
              res.send(payload);
            })
            .catch((error: any) => {
              res.sendStatus(500);
            });
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
