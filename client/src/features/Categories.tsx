import { useState, useContext, useEffect } from "react";
import { CategoryLists } from ".";
import { UserContext } from "../contexts/UserContext";
import { StyledHeader } from "./styles.css";
import { getRequest } from "../api/index";

export const Categories = () => {
  const { lists, user } = useContext(UserContext);
  const [category, setCategory] = useState("Movies");
  const [watched, setWatched] = useState<Array<string>>([]);
  const [list, setList] = useState<Array<string>>([]);

  // useEffect(() => {
  //   getRequest()
  // }, [category])

  useEffect(() => {
    let tempWatched = [];
    let tempList = [];
    for (const element of lists) {
      if (element.watched === true) {
        tempWatched.push(element);
      } else {
        tempList.push(element);
      }
    }

    setWatched(tempWatched);
    setList(tempList);
  }, [lists]);

  // useEffect(() => {
  //   console.log("watched", watched);
  //   console.log("list", list);
  // }, [watched, list]);

  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setCategory(e.target.id);
  };

  return (
    <>
      <StyledHeader>
        <h1
          id="Movies"
          className={category === "Movies" ? "category selected" : "category"}
          onClick={handleClick}
        >
          Movies
        </h1>
        <h1
          id="Shows"
          className={category === "Shows" ? "category selected" : "category"}
          onClick={handleClick}
        >
          Shows
        </h1>
        <h1
          id="Books"
          className={category === "Books" ? "category selected" : "category"}
          onClick={handleClick}
        >
          Books
        </h1>
        <h1
          id="Games"
          className={category === "Games" ? "category selected" : "category"}
          onClick={handleClick}
        >
          Games
        </h1>
      </StyledHeader>
      <hr />
      <CategoryLists watched={watched} list={list} />
    </>
  );
};
