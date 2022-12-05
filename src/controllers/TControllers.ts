import {Request, Response } from 'express'
import Tarefas from '../Models/Tarefas'

const TController = {

    async index(req: Request, res: Response): Promise<Response>{
        
        var tarefas = await Tarefas.find()
        return res.json(tarefas)
    }

}

export default TController;