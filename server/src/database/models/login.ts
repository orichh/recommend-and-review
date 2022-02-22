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


