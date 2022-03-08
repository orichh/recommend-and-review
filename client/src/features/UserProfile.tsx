import { useContext, useEffect, useState } from "react";
import { Header } from "../components";
import { UserContext } from "../contexts/UserContext";
import { UserProfileHeader } from "./UserProfileHeader";
import { getRequest } from "../api";
import { CategoryList } from "../components";

export const UserProfile = () => {
  const { user, logout } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Movies");
  const [selectedList, setSelectedList] = useState("Overview");

  useEffect(() => {
    alert("getting data");
    // get data here, can change to individual lists later
    // when want to optimize for performance
    // getRequest()
  }, []);

  useEffect(() => {
    // set movies, shows, books, etc here
  }, [data]);

  return (
    <>
      <Header logout={logout} />
      <UserProfileHeader
        user={user}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <CategoryList
        listName={selectedCategory}
        lists={
          selectedCategory === "Movies"
            ? movies
            : selectedCategory === "TV Shows"
            ? shows
            : selectedCategory === "Books"
            ? books
            : selectedCategory === "Games"
            ? games
            : null
        }
        setData={setData}
      />
    </>
  );
};
