import express from "express";
import dotev from "dotenv";
import connectDB from "./config/db.js";

const app = express();

dotev.config();

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor Corriento en el puerto https://localhost:${PORT}`);
});
