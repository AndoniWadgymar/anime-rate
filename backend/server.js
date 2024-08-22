import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import animeRouter from "./routes/animeRoute.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/animes", animeRouter);

app.get("/anime", (req, res) => {
  res.send("Server is ready");
});

app.listen(3000, () => {
  connectDB();
  console.log(`Server started at http://localhost: ${process.env.PORT}`);
});
