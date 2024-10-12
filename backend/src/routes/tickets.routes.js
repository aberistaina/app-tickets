import { Router } from "express";
import { findAll, createTicket, updateStateTicket, addComentary, findById, findByUser } from "../controllers/tickets.controllers.js"
import { verificarToken } from "../middlewares/login.middlewares.js"
import { verificarAdmin } from "../middlewares/admin.middlewares.js";

const router = Router()

router.get("/", verificarToken, verificarAdmin, findAll)
router.get("/:id", verificarToken, findById)
router.get("/rut/:rut", verificarToken , findByUser)
router.post("/", createTicket)
router.post("/comentary", addComentary)
router.put("/:id",verificarToken, updateStateTicket)



export default router