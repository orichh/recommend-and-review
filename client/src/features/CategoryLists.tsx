import { CategoryList } from "../components";
import { styled } from "@mui/styles";

const StyledCategoryWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  // border: "1px solid black",
  height: "70vh",
  width: "90vw",
  maxHeight: "50em",
  maxWidth: "60em",
  minWidth: "50em",
  justifyContent: "space-evenly",
  // backgroundColor: "lightgray",
});

export const CategoryLists = ({ watched, list, setWatched, setList }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledCategoryWrapper>
        <CategoryList listName="List" lists={list} setList={setList} />
        <CategoryList listName="On Deck" lists={list} setList={setList} />
        <CategoryList listName="Watched" lists={watched} setList={setWatched} />
      </StyledCategoryWrapper>
    </div>
  );
};
