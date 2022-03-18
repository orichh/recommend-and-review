import { useContext, useEffect, useState } from "react";
import { Header } from "../components";
import { UserContext } from "../contexts/UserContext";
import { UserProfileHeader, UserList } from "../features/";
import { getRequest } from "../api";
import { CategoryList } from "../components";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const { user, logout } = useContext(UserContext);
  const { id } = useParams();
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
    // getRequest()
    console.log("🚀 ~ file: UserProfile.tsx ~ line 26 ~ useEffect ~ id", id);
    getRequest("api/v1/lists", { id: id }).then((response) =>
      console.log("response data userprofile line 27", response.data)
    );
  }, [id]);

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
      <UserList
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
