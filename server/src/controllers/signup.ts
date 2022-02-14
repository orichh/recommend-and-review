import Joi from "joi";
import { addUser } from "../database/models";

const userSchema = Joi.object({
  first_name: Joi.string()
    .pattern(/^[a-zA-Z]+$/, "First name lowercase and capital letters")
    .required(), // check first name is provided and valid
  last_name: Joi.string()
    .pattern(/^[a-zA-Z]+$/, "Last name lowercase and capital letters")
    .required(), // check last name is provided and valid
  email: Joi.string().email().required(), // check valid email
  password: Joi.string().required(), // check password is present
});

export const signup = (req: any, res: any) => {
  // validate user submitted info
  const { error, value } = userSchema.validate(req.body);

  // try to add user if
  if (error === undefined) {
    addUser(value)
      .then((response: any) => {
        res.sendStatus(201);
      })
      .catch((error: any) => {
        // if duplicate email
        if (error.code === "23505") {
          res.send("email already exists").status(500);
        } else {
          res.sendStatus(500);
        }
      });
  } else {
    res.sendStatus(400);
  }
};
