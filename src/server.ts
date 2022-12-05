import express, {Request, Response } from 'express'
import mongoose from 'mongoose'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://hendreo:hendreo@cluster0.gbqwmue.mongodb.net/kman?retryWrites=true&w=majority')
.then(()=> (
    console.log('Connect')
))
.catch(err => (console.log(err)))



app.listen(3333)

//MONGO_URL = mongodb+srv://hendreo:hendreo@cluster0.gbqwmue.mongodb.net/kman?retryWrites=true&w=majority
