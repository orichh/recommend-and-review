import { addToUserList, getUserLists } from "../database/models";
import Joi from "joi";

const addItemSchema = Joi.object({
  rating: Joi.number().integer().required(),
  watched: Joi.boolean().required(),
  movie_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
});

export const addToList = (req: any, res: any) => {
  // validate user submitted info
  const { error, value } = addItemSchema.validate(req.body);

  if (error === undefined) {
    addToUserList(value)
      .then((data: any) => {
        res.send(data.rows);
      })
      .catch((error: any) => {
        res.send("error adding movie to list");
      });
  } else {
    res.sendStatus(400);
  }
};

export const getLists = (req: any, res: any) => {
  const userId = req.body.id;
  getUserLists(userId)
    .then((response: any) => {
      const payload = {
        data: response.rows,
      };
      res.send(payload);
    })
    .catch((error: any) => {
      res.sendStatus(500);
    });
};