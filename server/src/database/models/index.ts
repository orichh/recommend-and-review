import { pool } from "../index";

export const getAllMovies = () => {
  const queryString = `SELECT * FROM movies;`;
  return pool.query(queryString);
};
