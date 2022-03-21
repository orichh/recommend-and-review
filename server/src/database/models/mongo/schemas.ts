import { Schema } from "mongoose";

export const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  private_profile: Boolean,
  username: String,
  bio: String,
  profile_picture: String,
  followers: Array,
  following: Array,
  pending_following: Array,
  pending_followers: Array,
  movies: {
    want_to_watch: Array,
    watching: Array,
    watched: Array,
  },
  tv_shows: {
    want_to_watch: Array,
    watching: Array,
    watched: Array,
  },
  books: {
    want_to_read: Array,
    reading: Array,
    read: Array,
  },
  games: {
    want_to_play: Array,
    playing: Array,
    played: Array,
  },
});

export const movieSchema = new Schema({
  adult: Boolean,
  backdrop_path: String,
  belongs_to_collection: Object,
  budget: Number,
  genres: Array,
  homepage: String,
  id: Number,
  imdb_id: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  production_companies: Array,
  production_countries: Array,
  release_date: Date,
  revenue: Number,
  runtime: Number,
  spoken_languages: Array,
  status: String,
  tagline: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

export const sessionSchema = new Schema({
  session_id: String,
  user_id: String,
  expires: { type: Date, index: { expireAfterSeconds: 24 * 60 * 60 * 1000 } },
});
