// const { Pool, Client } = require('pg');
import { Pool } from "pg";

const dbConfig = {
  user: "richardo",
  host: "localhost",
  database: "recommend_and_review",
  password: "password",
  port: 5432,

  /*
    AWS config
    user: 'postgres',
    host: '',
    database: 'postgres',
    password: 'password',
    port: process.env.PORT || 5432,
  */
};

let pool: any;

try {
  console.log("connecting");
  pool = new Pool(dbConfig);
  pool.on("connect", () => {
    console.log("connected to db");
  });
} catch (err) {
  console.log(err);
}

export { pool };
