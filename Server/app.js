import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.routs.js'
dotenv.config({
    path:"./.env"
})
const app = express();
app.use('/', userRouter)


export  default app