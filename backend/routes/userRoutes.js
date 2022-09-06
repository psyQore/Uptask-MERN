import express from "express";
import {
  register,
  authenticate,
  confirm,
  forgetPassword,
  checkToken,
  newPassword,
  profile
} from "../controllers/userController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Autenticación, Registro y Confirmacion de usuarios

router.post("/", register); // Crear un nuevo usuario
router.post("/login", authenticate);
router.get("/confirm/:token", confirm);
router.post("/forget-password", forgetPassword);
router.route("/forget-password/:token").get(checkToken).post(newPassword);
router.get("/profile", checkAuth, profile);

export default router;
