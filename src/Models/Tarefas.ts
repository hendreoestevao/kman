import { Schema } from 'mongoose'
import mongoose  from 'mongoose'

const Tarefas = new  Schema ({
    nome: String,
    descricao: String,
    finalizado: Boolean

},
{timestamps: true})

export default mongoose.model('Tarefas', Tarefas)