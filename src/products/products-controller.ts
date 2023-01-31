import { NextFunction, Request, Response } from 'express';
import mongoose from "mongoose";
import Product from './products-model'

const createProduct = (req: Request, res: Response, next: NextFunction) => {
	const { title, description, price } = req.body;

	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		title,
		description,
		price
	});

	return product
		.save()
		.then((product) => res.status(201).json({ product }))
		.catch((error) => res.status(500).json({ error }));
};

const getProducts = (req: Request, res: Response, next: NextFunction) => {
	return Product.find()
		.then((products) => res.status(200).json({ products }))
		.catch((error) => res.status(500).json({ error }));
};

export default {createProduct, getProducts}