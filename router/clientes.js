import express from "express"
import ControllerClientes from "../controller/clientes.js"
import authMiddleware from "../middleware/auth.js"
const router = express.Router()

// TODO
router.post("/login", ControllerClientes.Login)
router.get("/buscar", authMiddleware, ControllerClientes.Buscar)
router.get("/detalhe/:id", ControllerClientes.Detalhe)
router.post("/criar", ControllerClientes.Criar)
router.put("/alterar/:id", ControllerClientes.Alterar)
router.delete("/deletar/:id", ControllerClientes.Deletar)

export default router  