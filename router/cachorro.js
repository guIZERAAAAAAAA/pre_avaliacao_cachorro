import express from 'express'
import cachorro from '../repository/cachorro.js'
import ControllerCachorro from "..controller/cachorro.js"

const router = express.Router()

// Buscar todos 
router.get("/buscar", ControllerCachorro.Buscar)

//Buscar um 
router.get("/detalhe/:id", ControllerCachorro.Detalhe)

//Criar
router.post("/criar",ControllerCachorro.Criar)

//Alterar 
router.post("/alterar",ControllerCachorro.Alterar)

//Deletar
router.post("/Deletar",ControllerCachorro.Deletar)

export  default router
