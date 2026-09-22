import express from "express"
import ControllerAtendimentos from "../controller/atendimentos.js"
const router = express.Router()

router.get("/buscar", ControllerAtendimentos.Buscar)
router.get("/detalhe/:id", ControllerAtendimentos.Detalhe)
router.post("/criar", ControllerAtendimentos.Criar)
router.put("/alterar/:id", ControllerAtendimentos.Alterar)
router.delete("/deletar/:id", ControllerAtendimentos.Deletar)

export default router