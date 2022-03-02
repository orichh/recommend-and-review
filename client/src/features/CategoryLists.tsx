import { CategoryList } from "../components";

export const CategoryLists = ({ watched, list }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid black",
          height: "70vh",
          width: "90vw",
          maxHeight: "50em",
          maxWidth: "60em",
          justifyContent: "space-evenly",
          alignItems: "baseline",
        }}
      >
        <CategoryList listName="List" lists={list} />
        <CategoryList listName="On Deck" lists={list} />
        <CategoryList listName="Watched" lists={watched} />
      </div>
    </div>
  );
};
