import express from "express";
import { getTest, getMovies, signup, login } from "../controllers";

export const router = express.Router();

router.get("/test", getTest);
router.get("/movies", getMovies);
router.get("/signup", signup);
router.get("/login", login);
