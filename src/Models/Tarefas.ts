import { Schema } from "mongoose";
import mongoose from "mongoose";

//tabelas do banco de dados
const Tarefas = new Schema(
  {
    nome: String,
    descricao: String,
    finalizado: Boolean,
  },
  { timestamps: true }
);

export default mongoose.model("Tarefas", Tarefas);
