import { pool } from "../index";

type AddMovie = {
  rating: number;
  watched: boolean;
  movie_id: number;
  user_id: number;
};

// send insert query, since email field is unique, it'll fail if exists
export const addToUserList = ({
  rating,
  watched,
  movie_id,
  user_id,
}: AddMovie) => {
  const date_added = new Date();
  const queryString = `
    INSERT INTO users_lists(date_added, rating, watched, movie_id, user_id)
    VALUES($1, $2, $3, $4, $5)
  `;
  const query = {
    name: "add-movie-to-list",
    text: queryString,
    values: [date_added, rating, watched, movie_id, user_id],
  };
  return pool.query(query);
};
