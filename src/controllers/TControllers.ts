import {Request, Response } from 'express'

const TController = {

    async index(req: Request, res: Response): Promise<Response>{

        var tarefas = {}
        return res.json(tarefas)
    }

}

export default TController;