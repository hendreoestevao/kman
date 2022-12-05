import express, {Request, Response } from 'express'
import mongoose from 'mongoose'


const app = express()

mongoose.connect('mongodb+srv://hendreo:hendreo@cluster0.gbqwmue.mongodb.net/kman?retryWrites=true&w=majority')
.then(()=> (
    console.log('Connect')
))
.catch(err => (console.log(err)))

app.get('/',(req: Request,res: Response) => {
    return res.send('hellou word')
})

app.listen(3333)

//MONGO_URL = mongodb+srv://hendreo:hendreo@cluster0.gbqwmue.mongodb.net/kman?retryWrites=true&w=majority
