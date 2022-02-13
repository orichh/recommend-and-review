import express from "express";
import { getTest, getMovies } from "../controllers";

export const router = express.Router();

router.get("/test", getTest);
router.get("/movies", getMovies);
