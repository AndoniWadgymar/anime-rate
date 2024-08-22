import mongoose from "mongoose";
import Anime from "../models/animeModel.js";

const checkValidID = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: "fail", message: "Invalid Product ID" });
  }
};

export const getAnimes = async (req, res) => {
  try {
    const animes = await Anime.find({});
    res.status(200).json({
      status: "success",
      results: animes.length,
      data: {
        animes,
      },
    });
  } catch (error) {
    console.error("Error in fetching animes: ", error.message);
    res.status(500).json({ status: "fail", message: "Server Error" });
  }
};

export const getAnime = async (req, res) => {
  const { id } = req.params;
  checkValidID(id);
  try {
    const anime = await Anime.findById(id);
    res.status(200).json({ status: "success", data: { anime } });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error });
  }
};

export const createAnime = async (req, res) => {
  const anime = req.body;
  if (!anime.title || !anime.creator || !anime.episodes) {
    res
      .status(400)
      .json({ status: "fail", message: "Send all required fields" });
  }

  try {
    const newAnime = await Anime.create(anime);
    res.status(201).json({
      status: "success",
      data: {
        anime: newAnime,
      },
    });
  } catch (error) {
    console.error("Error in Create anime: ", error.message);
    res.status(500).json({ status: "fail", message: "Server Error" });
  }
};

export const updateAnime = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  checkValidID(id);
  try {
    const updatedAnime = await Anime.findByIdAndUpdate(id, body);
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const deleteAnime = async (req, res) => {
  const { id } = req.params;
  checkValidID(id);
  try {
    const anime = await Anime.findByIdAndDelete(id);
    res.status(200).json({ status: "success", data: { anime } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error });
  }
};
