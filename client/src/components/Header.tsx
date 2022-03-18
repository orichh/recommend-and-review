import { Link, useNavigate } from "react-router-dom";

export const Header = ({ logout }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row bg-[#343434] justify-end h-16 items-center">
        <Link to="/" id="movies-link">
          <h3
            className="text-white cursor-pointer font-thin text-base hover:border-b border-sky-400"
            onClick={() => alert("hit")}
          >
            Home
          </h3>
        </Link>
        <Link to="/movies" id="movies-link">
          <h3
            className="text-white cursor-pointer font-thin text-base hover:border-b border-sky-400"
            onClick={() => alert("hit")}
          >
            Movies
          </h3>
        </Link>
        <h3
          className="text-white cursor-pointer font-thin text-lg hover:border-b border-sky-400"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          logout
        </h3>
      </div>
    </>
  );
};
