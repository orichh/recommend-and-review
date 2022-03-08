import { pool } from "../index";

export const getAllMovies = () => {
  const queryString = `SELECT * FROM movies limit 10;`;
  return pool.query(queryString);
};

export const getMovieByName = (movieName: string) => {
  const queryString = `
    SELECT *
    FROM movies
    WHERE name = $1;
  `;
  const query = {
    name: "get-movie-by-name",
    text: queryString,
    values: [movieName],
  };
  return pool.query(query);
};
