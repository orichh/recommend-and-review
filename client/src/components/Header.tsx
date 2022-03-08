import { Link } from "react-router-dom";

export const Header = ({ logout }) => {
  return (
    <>
      <div className="flex flex-row bg-[#343434] justify-end h-16 items-center">
        <Link to="/" id="movies-link">
          <h3
            className="text-white cursor-pointer font-thin text-lg"
            onClick={() => alert("hit")}
          >
            Home
          </h3>
        </Link>
        <Link to="/movies" id="movies-link">
          <h3
            className="text-white cursor-pointer font-thin text-lg"
            onClick={() => alert("hit")}
          >
            Movies
          </h3>
        </Link>
        <h3
          className="text-white cursor-pointer font-thin text-lg"
          onClick={logout}
        >
          logout
        </h3>
      </div>
    </>
  );
};
