import express from "express";
import {
  register,
  authenticate,
  confirm,
} from "../controllers/userController.js";

const router = express.Router();

// Autenticación, Registro y Confirmacion de usuarios

router.post("/", register); // Crear un nuevo usuario
router.post("/login", authenticate); // Autenticar usuario
router.get("/confirm/:token", confirm);

export default router;
