import mongoose from "mongoose";
import { addUser } from "./users";
import { userSchema, movieSchema } from "./schemas";

// connect to mongodb database
const DB_URL = "mongodb://localhost:27017/movies";
const mongoConnection = mongoose.createConnection(DB_URL);

// export out to mongo models
export const User = mongoConnection.model("Users", userSchema);
export const Movie = mongoConnection.model("Movies", movieSchema);

// export out to controllers
export { addUser };
