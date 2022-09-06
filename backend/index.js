import express from "express";
import dotev from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";


const app = express();
app.use(express.json());

dotev.config();

connectDB();

// Routing
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor Corriento en el puerto http://localhost:${PORT}/`);
});
