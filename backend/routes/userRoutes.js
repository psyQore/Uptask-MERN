import express from "express";
import {
  register,
  authenticate,
  confirm,
  forgetPassword,
  checkToken,
} from "../controllers/userController.js";

const router = express.Router();

// Autenticación, Registro y Confirmacion de usuarios

router.post("/", register); // Crear un nuevo usuario
router.post("/login", authenticate); // Autenticar usuario
router.get("/confirm/:token", confirm); // Confirmar la cuenta
router.post("/forget-password", forgetPassword); // Olvide password
router.get("/forget-password/:token", checkToken);

export default router;
