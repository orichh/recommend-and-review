import { pool } from "../index";

// check if email and password match
export const getPasswordForUser = (email: string) => {
  const queryString = `
    SELECT *
      FROM users
     WHERE email=$1
  `;
  const query = {
    name: "get-password",
    text: queryString,
    values: [email],
  };
  return pool.query(query);
};

export const getUserLists = (id: number) => {
  const queryString = `
    SELECT m.name, ul.date_added, ul.rating
    FROM users_lists as ul
    JOIN movies as m ON m.id=ul.movie_id
    JOIN users as u ON u.id=ul.user_id
    WHERE u.id = $1
  `;
  const query = {
    name: "get-user-lists",
    text: queryString,
    values: [id],
  };
  return pool.query(query);
};
