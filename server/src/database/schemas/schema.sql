-- CREATE DATABASE recommend_and_review
-- psql recommend_and_review < server/src/database/schemas/schema.sql

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
  id BIGSERIAL PRIMARY KEY,
    name VARCHAR (100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS users_lists (
  id BIGSERIAL PRIMARY KEY,
  date_added DATE NOT NULL,
  rating INTEGER NOT NULL,
  watched BOOLEAN NOT NULL,
  movie_id BIGSERIAL UNIQUE NOT NULL REFERENCES movies,
  user_id BIGSERIAL NOT NULL REFERENCES users
);

-- INSERT INTO movies (name) VALUES ('Interstellar');
-- ALTER TABLE users_lists ADD UNIQUE (movie_id);
