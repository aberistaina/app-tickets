import { Router } from "express";
import { createUser, loginUser } from "../controllers/usuarios.controllers.js";
import { emitirToken } from "../middlewares/login.middlewares.js";



const router = Router()

router.post("/", createUser)
router.post("/login", emitirToken, loginUser)


export default router