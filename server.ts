import * as dotenv from 'dotenv'
import express, { Express } from "express";
import mongoose from "mongoose";
import productRoutes from "./src/products/products-router";

const app: Express = express();
app.use(express.json())

dotenv.config()
const port = process.env.PORT || 3001
const uri = process.env.DB_URL || ''

mongoose
  .set('strictQuery', false)
  .connect(uri)
  .then(() => console.log())

app.use('/', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on pot ${port}`)
})