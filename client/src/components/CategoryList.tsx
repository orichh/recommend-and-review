import { ListItem } from ".";

export const CategoryList = ({ listName, lists }) => {
  return (
    <div>
      <h1>{listName}</h1>
      <button>add</button>
      {lists.length ? (
        <ol>
          {lists.map((element, index, array) => {
            return <ListItem element={element} />;
          })}
        </ol>
      ) : (
        <div>error</div>
      )}
    </div>
  );
};
