import express from "express";
import {
  getTest,
  getMovies,
  signup,
  login,
  addToList,
  getLists,
} from "../controllers";

export const router = express.Router();

router.get("/api/v1/test", getTest);
router.get("/api/v1/movies", getMovies);
router.post("/api/v1/lists", getLists);
router.post("/api/v1/signup", signup);
router.post("/api/v1/login", login);
router.post("/api/v1/lists", addToList);
