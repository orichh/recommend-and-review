import { pool } from "../index";

export const addMovieToDatabase = (movieName: string) => {
  const queryString = `
    INSERT INTO movies (name)
    VALUES ($1)
    ON CONFLICT (name) DO NOTHING
    RETURNING id
  `;
  const query = {
    name: "add-movie",
    text: queryString,
    values: [movieName],
  };
  return pool.query(query);
};

/*

TODO: so, may not get movie_id from post request
does that mean I should first do a sql query for a movie?
if exists, get the movie_id
otherwise, add


*/
