import { useState, useContext } from "react";
import { CategoryLists } from ".";
import { UserContext } from "../contexts/UserContext";
import { StyledHeader } from "./styles.css";

export const Categories = () => {
  const { lists } = useContext(UserContext);

  return (
    <>
      <StyledHeader>
        <h1>Movies</h1>
        <h2>Shows</h2>
        <h2>Books</h2>
        <h2>Games</h2>
      </StyledHeader>
      <CategoryLists lists={lists} />
    </>
  );
};
