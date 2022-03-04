import { getAllMovies, getMovieByName } from "./getAllMovies";
import { addUser } from "./addUser";
import { getPasswordForUser } from "./login";
import { addToUserList } from "./addToUserList";
import { getUserLists } from "./getUserLists";
import { addMovieToDatabase } from "./addMovie";
import { deleteItemFromUserList } from "./user_lists/deleteItem";

export {
  getAllMovies,
  addUser,
  getPasswordForUser,
  addToUserList,
  getUserLists,
  addMovieToDatabase,
  getMovieByName,
  deleteItemFromUserList,
};
