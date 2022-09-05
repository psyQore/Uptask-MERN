import express from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();

// Autenticación, Registro y Confirmacion de usuarios

router.post("/", register) // Crear un nuevo usuario

export default router;
