import { Request, Response } from "express";
import Tarefas from "../Models/Tarefas";

const TController = {
  //puxar todas as tarefas
  async index(req: Request, res: Response): Promise<Response> {
    var tarefas = await Tarefas.find();
    return res.json(tarefas);
  },
  //puxar tarefa pelo id
  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    var tarefa = await Tarefas.findById(id);
   
    return res.json(tarefa);
  },
  //criar tarefa
  async create(req: Request, res: Response): Promise<Response> {
    const { nome, descricao, finalizado } = req.body;
    if(!nome){
        res.status(422).json({ error: "o nome é obrigatorio" });
    }
    if(!descricao){
        res.status(422).json({ error: "a descrição é obrigatorio" });
    }
    if(!finalizado){
        res.status(422).json({ error: "a finalização  deve receber false ou true" });
    }
    var tarefa = await Tarefas.create(req.body);
    return res.json(tarefa);
  },
  //atualizar tarefa
  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    var tarefa = await Tarefas.findByIdAndUpdate(id, req.body);
    return res.json(tarefa);
  },
  //deletar uma tarefa
  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    var tarefa = await Tarefas.findByIdAndDelete(id, req.body);
    return res.json(tarefa);
  },
};

export default TController;
