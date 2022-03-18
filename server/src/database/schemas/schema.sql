-- CREATE DATABASE recommend_and_review
-- psql recommend_and_review < server/src/database/schemas/schema.sql

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
  id BIGSERIAL PRIMARY KEY,
  original_title VARCHAR(200),
  release_date DATE,
  overview VARCHAR(1000),
  tagline VARCHAR(1000),
  poster_path VARCHAR(200),
  backdrop_path VARCHAR(200),
  imdb_id VARCHAR(50),
  vote_average REAL,
  vote_count INTEGER,
  original_language VARCHAR(50),
  budget BIGINT,
  revenue BIGINT,
  status VARCHAR(50),
  video BOOLEAN
);

CREATE TABLE IF NOT EXISTS users_lists (
  id BIGSERIAL PRIMARY KEY,
  date_added DATE NOT NULL,
  rating INTEGER,
  watched BOOLEAN NOT NULL,
  movie_id INTEGER NOT NULL REFERENCES movies,
  user_id INTEGER NOT NULL REFERENCES users,
  UNIQUE(movie_id, user_id)
);

-- INSERT INTO movies (name) VALUES ('Interstellar');
-- ALTER TABLE users_lists ADD UNIQUE (movie_id);
-- \COPY movies (id, original_title, release_date, overview, tagline, poster_path, backdrop_path, imdb_id, vote_average, vote_count, original_language, budget, revenue, status, video) FROM 'movies.csv' DELIMITER E'\t';