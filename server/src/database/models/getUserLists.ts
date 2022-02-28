import { pool } from "../index";

export const getUserLists = (id: number) => {
  const queryString = `
    SELECT m.name, ul.date_added, ul.rating, ul.watched
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
