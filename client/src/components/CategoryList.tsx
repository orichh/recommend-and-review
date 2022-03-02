import { ListItem } from ".";
import { useEffect } from "react";

export const CategoryList = ({ listName, lists }) => {
  const handleSubmit = (e: any) => {
    alert("hit");
  };

  useEffect(() => {
    console.log("category list lists", lists);
  }, [lists]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid black",
          width: "100%",
          minWidth: "15em",
        }}
      >
        <h1>{listName}</h1>
        <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
          add
        </button>
      </div>
      {lists.length ? (
        <>
          {lists.map((element, index, array) => {
            return <ListItem element={element} />;
          })}
        </>
      ) : (
        <div>nothing here</div>
      )}
    </div>
  );
};
