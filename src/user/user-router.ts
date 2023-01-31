import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import { test1 } from "./user-controller";

const router = express.Router()
router.get('/', (req: Request, res: Response) => {
  res.send(test1())
})

export default router