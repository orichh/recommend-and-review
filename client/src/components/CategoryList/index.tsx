import { Loading } from "..";
import { CategoryOverview } from "./CategoryOverview";
import { ListItem } from "./ListItem";

type CategoryListType = {
  listName: string;
  lists: any;
  setData?: Function;
};

export const CategoryList = ({
  listName,
  lists,
  setData,
}: CategoryListType) => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row border-b justify-center border-gray-200 w-full bg-gray-50 text-gray-600 font-light">
          <h2>Movies</h2>
          <h2>TV Shows</h2>
          <h2>Books</h2>
          <h2>Games</h2>
        </div>
        <div>
          <input className="border border-black rounded" placeholder="search" />
          <button className="border border-black rounded">filter</button>
        </div>
        <div className="flex flex-row flex-wrap justify-center w-4/5">
          {lists.length ? (
            lists.map((element, idx, collection) => {
              return <ListItem element={element} />;
            })
          ) : (
            <div>loading</div>
          )}
        </div>
        <div>
          <button onClick={() => alert("fix me")}>placeholder button</button>
        </div>
      </div>
    </>
  );
};
