import { Router } from 'express'
import TController from './Controllers/TControllers';


const router = Router()

//Listar todas as tarefas
router.get('/',TController.index)



export default router;