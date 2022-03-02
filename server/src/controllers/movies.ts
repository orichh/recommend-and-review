import Joi from "joi";
import {
  getAllMovies,
  addMovieToDatabase,
  getMovieByName,
  addToUserList,
  getUserLists,
} from "../database/models";

export const getMovies = (req: any, res: any) => {
  getAllMovies()
    .then((data: any) => {
      res.send(data.rows);
    })
    .catch((error: any) => {
      res.send("error getting movies");
    });
};

const movieSchema = Joi.object({
  movieName: Joi.string().required(), // check movie name
  watched: Joi.boolean().required(),
  user_id: Joi.number().required(),
});

export const addMovie = (req: any, res: any) => {
  const { error, value } = movieSchema.validate(req.body);

  if (error === undefined) {
    const { movieName, watched, user_id } = value;
    let movie_id: number;

    getMovieByName(movieName)
      .then((data: any) => {
        if (data.rows.length === 0) {
          addMovieToDatabase(movieName)
            .then((test: any) => {
              console.log("added to db 37", test.rows[0].id);
              movie_id = parseInt(test.rows[0].id);
              addToUserList({ watched, movie_id, user_id })
                .then(() => {
                  getUserLists(user_id)
                    .then((data: any) => {
                      res.status(200).send(data.rows);
                    })
                    .catch((error: any) => {
                      res.status(500).send("error getting user lists");
                    });
                })
                .catch((error: any) => {
                  console.log("error on line 44", error);
                  res.status(500).send("error adding to user list 43");
                });
            })
            .catch((error: any) => {
              console.log("error line 48", error);
              res.status(500).send("error adding");
            });
        } else {
          movie_id = parseInt(data.rows[0].id);
          addToUserList({ watched, movie_id, user_id })
            .then(() => {
              res.status(200).send("successfully added to user list 53");
            })
            .catch(() => {
              res.status(500).send("error adding to user list 56");
            });
        }
        // console.log("🚀 ~ file: movies.ts ~ line 27 ~ .then ~ data", data);
        // res.send(data.rows);
      })
      .catch((error: any) => {
        console.log(error);
        res.status(500).send("error getting movie");
      });
  } else {
    res.sendStatus(400);
  }
};

/*

get movie by name
if results is empty, add movie to the database
else use the results of the prior query to add movie_id to user list

*/
