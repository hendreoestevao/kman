import {Request, Response } from 'express'
import Tarefas from '../Models/Tarefas'

const TController = {

    async index(req: Request, res: Response): Promise<Response>{
        
        var tarefas = await Tarefas.find()
        return res.json(tarefas)
    },
    async findById(req: Request, res: Response): Promise<Response>{
const {_id} = req.params
        var tarefa = await Tarefas.findById(_id)
        return res.json(tarefa)
    },

}

export default TController;