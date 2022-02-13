import express from "express";
import { getTest } from "../controllers";

export const router = express.Router();

router.get("/test", getTest);
