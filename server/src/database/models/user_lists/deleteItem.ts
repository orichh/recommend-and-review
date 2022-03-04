import { pool } from "../../index";

export const deleteItemFromUserList = (list_id: number, user_id: number) => {
  const queryString = `
    DELETE
    FROM users_lists
    WHERE id=$1 AND user_id=$2;
  `;
  const query = {
    name: "delete-from-user-list",
    text: queryString,
    values: [list_id, user_id],
  };
  return pool.query(query);
};
