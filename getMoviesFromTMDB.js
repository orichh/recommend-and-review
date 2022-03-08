const fs = require("fs");
const readline = require("readline");
const csv = require("@fast-csv/format");
const path = require("path");
const axios = require("axios");
const fastcsv = require("fast-csv");

const BASE_URL = axios.create({baseURL: "https://api.themoviedb.org/3"}) //prettier-ignore

const getRequest = (url) => {
  return BASE_URL({
    method: "GET",
    url: url,
  });
};

const API_KEY = "c830dcc3003581da27a70fe0d8cf8fb5";
const movie_id = "550";

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
    // if (counter === 10000) break;
    const parsed = JSON.parse(line);
    const { id } = parsed; // movie id to pass to getMovies
    const isValid = (obj) => {
      for (const key in obj) {
        if (obj[key] === null || obj[key] === "") {
          return false;
        }
      }
      return true;
    };

    getMovies(id.toString(), API_KEY)
      .then((response) => {
        console.log("response", response.data);
        const {
          id,
          original_title,
          release_date,
          overview,
          tagline,
          poster_path,
          backdrop_path,
          imdb_id,
          vote_average,
          vote_count,
          original_language,
          budget,
          revenue,
          status,
          video,
        } = response.data;

        const data = {
          id,
          original_title,
          release_date,
          overview,
          tagline,
          poster_path,
          backdrop_path,
          imdb_id,
          vote_average,
          vote_count,
          original_language,
          budget,
          revenue,
          status,
          video,
        };

        if (isValid(data) === true) {
          ws.write(
            id +
              "\t" +
              original_title +
              "\t" +
              release_date +
              "\t" +
              overview +
              "\t" +
              tagline +
              "\t" +
              poster_path +
              "\t" +
              backdrop_path +
              "\t" +
              imdb_id +
              "\t" +
              vote_average +
              "\t" +
              vote_count +
              "\t" +
              original_language +
              "\t" +
              budget +
              "\t" +
              revenue +
              "\t" +
              status +
              "\t" +
              video +
              "\n",
            "utf-8"
          );
        }
      })
      .catch((error) => {
        console.log("🚀 ~ file: test.js ~ line 10 ~ error", error);
        errorWS.write(id);
      });
    // counter++;
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
