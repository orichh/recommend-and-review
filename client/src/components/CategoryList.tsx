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
    <div>
      <h1>{listName}</h1>
      <button onClick={handleSubmit}>add</button>
      {lists.length ? (
        <ol>
          {lists.map((element, index, array) => {
            return <ListItem element={element} />;
          })}
        </ol>
      ) : (
        <div>nothing here</div>
      )}
    </div>
  );
};
