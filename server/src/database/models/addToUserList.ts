import { pool } from "../index";

type AddMovie = {
  watched: boolean;
  movie_id: number;
  user_id: number;
};

// send insert query, since email field is unique, it'll fail if exists
export const addToUserList = ({
  // rating?,
  watched,
  movie_id,
  user_id,
}: AddMovie) => {
  const date_added = new Date();
  const queryString = `
    INSERT INTO users_lists(date_added, watched, movie_id, user_id)
    VALUES($1, $2, $3, $4)
  `;
  const query = {
    name: "add-movie-to-list",
    text: queryString,
    values: [date_added, watched, movie_id, user_id],
  };
  return pool.query(query);
};

/*

could first check if there's a movie id that was given
in the request
if so, simply add the movie id reference while adding to
the user list

if not, then check if the movie is already in there
because doesn't necessarily mean that the movie
doesn't already exist in the database,
it just means that the user didn't select a movie
from the dropdown menu

so, try adding the movie into the db
on success, return id

if adding, should the entire list be sent back in the request?

If not, then how would I add just the one?
maybe just do it this way, if there's performance issues,
can come back and optimize and see if there's a better way

*/
