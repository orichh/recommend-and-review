import { ListItem } from "../../components/CategoryList/ListItem";

type CategoryListType = {
  listName: string;
  lists: any;
  setData?: Function;
};

export const UserList = ({ listName, lists, setData }: CategoryListType) => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
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
