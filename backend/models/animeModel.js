import mongoose from "mongoose";

const animeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    episodes: {
      type: Number,
      min: 1,
    },
    rating: {
      type: Number,
      default: 0.0,
    },
    Aired: {
      type: Date,
    },
    Ended: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
