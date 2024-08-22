import express from "express";

import {
  createAnime,
  deleteAnime,
  getAnime,
  getAnimes,
  updateAnime,
} from "../controllers/animeController.js";

const router = express.Router();

router.get("/", getAnimes);

router.post("/", createAnime);

router.get("/:id", getAnime);

router.put("/:id", updateAnime);

router.delete("/:id", deleteAnime);

export default router;
