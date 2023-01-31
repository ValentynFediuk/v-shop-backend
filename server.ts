import * as dotenv from 'dotenv'

import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import router from "./src/user/user-router";

dotenv.config()


const app: Express = express();
const port = 3000


const uri = process.env.DB_URL || ''
mongoose
  .connect(uri)
  .then(() => console.log('connected'))
app.use('/user', router)
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Example app listening on pot ${port}`)
})
