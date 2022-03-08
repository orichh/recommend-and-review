import { useEffect } from "react";

export const ListItem = ({ element }) => {
  useEffect(() => {
    console.log(
      "🚀 ~ file: ListItem.tsx ~ line 6 ~ useEffect ~ element",
      element
    );
  }, [element]);
  return (
    <div className="w-1/5 mx-5 relative flex flex-col items-center justify-center hover:bg-gray-100 hover:text-sky-400">
      {element ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original${element.poster_path}`}
            alt={`Poster for ${element.original_title}`}
            className="w-52 cursor-pointer"
          />
          <h3>{element.original_title}</h3>
          <button
            className="border border-gray-300 rounded w-16 absolute top-2 right-6 bg-white hover:text-sky-400"
            onClick={() => alert("hit")}
          >
            add
          </button>
        </>
      ) : null}
    </div>
  );
};
