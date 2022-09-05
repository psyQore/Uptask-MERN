import express from "express";
import { register, authenticate } from "../controllers/userController.js";

const router = express.Router();

// Autenticación, Registro y Confirmacion de usuarios

router.post("/", register); // Crear un nuevo usuario
router.post("/login", authenticate );

export default router;
