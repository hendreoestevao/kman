import { Router } from 'express'
import TController from './Controllers/TControllers';


const router = Router()

//Listar todas as tarefas
router.get('/tarefas',TController.index)
//buscar tarefas pelo id
router.get('/tarefas/:id',TController.findById)
//criar tarefas
router.post('/tarefas', TController.create)

export default router;