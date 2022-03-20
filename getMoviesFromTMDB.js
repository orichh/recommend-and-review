const fs = require("fs");
const readline = require("readline");
const csv = require("@fast-csv/format");
const path = require("path");
const axios = require("axios");
const fastcsv = require("fast-csv");

const BASE_URL = axios.create({baseURL: "https://api.themoviedb.org/3"}) //prettier-ignore

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/movies")
  .then((s) => {
    console.log("connected to db!");
  })
  .catch((err) => {
    console.log(err);
  });

const getRequest = (url) => {
  return BASE_URL({
    method: "GET",
    url: url,
  });
};

const movieSchema = new mongoose.Schema({
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

const Movie = mongoose.model("Movies", movieSchema);

const API_KEY = "c830dcc3003581da27a70fe0d8cf8fb5";
// const movie_id = "550";

const getMovies = (movie_id, API_KEY) => {
  const combinedUrl = "/movie/" + movie_id + "?api_key=" + API_KEY;
  return getRequest(combinedUrl);
};

async function processLineByLine() {
  const ws = fs.createWriteStream("movies.csv", { flags: "a" });
  const errorWS = fs.createWriteStream("movie_errors.csv", { flags: "a" });
  const fileStream = fs.createReadStream("movie_ids.json");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let counter = 0;
  for await (const line of rl) {
    // if (counter === 5) break;
    if (counter % 10000 === 0) console.log(counter);
    const parsed = JSON.parse(line);
    const { id } = parsed; // movie id to pass to getMovies

    const foundMovie = await Movie.find({ id: id });
    if (!foundMovie.length) {
      try {
        const response = await getMovies(id.toString(), API_KEY);
        const { data } = response;
        const movie = new Movie(data);
        movie.save().catch((err) => console.log("exists already", counter));
      } catch {
        errorWS.write(id.toString() + "\n", "utf-8");
      }
    }
    counter++;
  }
}

processLineByLine();

/*

TODO: When getting the body data, remove any tabs
find a way to handle null and empty string values that will be accepted by postgres
Remove that new line error where the input had a new line

*/

// let stream = fs.createReadStream(path.resolve(__dirname, "movies.csv"));

// stream.on("error", (error) => console.log("error 169", error));

// let csvStream = fastcsv
//   .parse()
//   .pipe(fastcsv.parse({ headers: false, delimiter: "\t" }))
//   .on("data", (err, data) => {
//     if (err) console.log(err);
//   })
//   .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));

// console.log("done");
