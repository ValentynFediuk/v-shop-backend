import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
	title: string;
	description: string;
	price: number
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
	{
		title: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		price: { type: Number, required: true, }
	},
	{
		timestamps: true,
		versionKey: false
	}
);

export default mongoose.model<IProductModel>('Product', ProductSchema);