import { Router } from 'express'
import TController from './controllers/TControllers';


const router = Router()

router.get('/',TController.index)



export default router;