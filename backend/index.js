import express from "express";
import dotev from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotev.config();

connectDB();

// Routing
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor Corriento en el puerto http://localhost:${PORT}/`);
});
