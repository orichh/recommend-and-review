import { pool } from "../index";

type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

// send insert query, since email field is unique, it'll fail if exists
export const addUser = ({ first_name, last_name, email, password }: User) => {
  const queryString = `
    INSERT INTO users(first_name, last_name, email, password)
    VALUES($1, $2, $3, $4)
  `;
  const query = {
    name: "add-user",
    text: queryString,
    values: [first_name, last_name, email, password],
  };
  return pool.query(query);
};
