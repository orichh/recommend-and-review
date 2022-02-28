import { useState, useContext, useEffect } from "react";
import { CategoryLists } from ".";
import { UserContext } from "../contexts/UserContext";
import { StyledHeader } from "./styles.css";

export const Categories = () => {
  const { lists } = useContext(UserContext);
  const [watched, setWatched] = useState<Array<string>>([]);
  const [list, setList] = useState<Array<string>>([]);

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

  useEffect(() => {
    console.log("watched", watched);
    console.log("list", list);
  }, [watched, list]);

  return (
    <>
      <StyledHeader>
        <h1>Movies</h1>
        <h2>Shows</h2>
        <h2>Books</h2>
        <h2>Games</h2>
      </StyledHeader>
      <CategoryLists watched={watched} list={list} />
    </>
  );
};
