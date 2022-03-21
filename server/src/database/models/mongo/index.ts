import mongoose from "mongoose";
import { userSchema, movieSchema, sessionSchema } from "./schemas";
import { addUser } from "./users";
import { addSession } from "./sessions";

// connect to mongodb database
const DB_URL = "mongodb://localhost:27017/movies";
const mongoConnection = mongoose.createConnection(DB_URL);

// export out to mongo models
export const User = mongoConnection.model("Users", userSchema);
export const Movie = mongoConnection.model("Movies", movieSchema);
export const Session = mongoConnection.model("Sessions", sessionSchema);

// export out to controllers
export { addUser, addSession };
