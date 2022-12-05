import { Router } from "express";
import TController from "./Controllers/TControllers";

const router = Router();

//Listar todas as tarefas
router.get("/tarefas", TController.index);
//buscar tarefa pelo id
router.get("/tarefas/:id", TController.findById);
//criar tarefa
router.post("/tarefas", TController.create);
//atualizar uma tarefa
router.put("/tarefas/:id", TController.update);
//deletar uma tarefa
router.delete("/tarefas/:id", TController.delete);
export default router;
