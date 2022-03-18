import { useContext, useEffect, useState } from "react";
import { Header } from "../components";
import { UserContext } from "../contexts/UserContext";
import { getRequest } from "../api";
import { CategoryList } from "../components";

export const MoviesList = () => {
  const { user, logout } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Movies");
  const [selectedList, setSelectedList] = useState("Overview");

  useEffect(() => {
    // alert("getting data");
    // get data here, can change to individual lists later
    // when want to optimize for performance
    getRequest("/api/v1/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    console.log("movies", movies);
  }, [movies]);

  useEffect(() => {
    // set movies, shows, books, etc here
  }, [data]);

  return (
    <>
      <Header logout={logout} />
      <CategoryList listName="Movies" lists={movies} />
    </>
  );
};
