import { CategoryList } from "../components";

export const CategoryLists = ({ lists }) => {
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
        }}
      >
        <CategoryList listName="List" lists={lists} />
        <CategoryList listName="On Deck" lists={lists} />
        <CategoryList listName="Watched" lists={lists} />
      </div>
    </div>
  );
};
