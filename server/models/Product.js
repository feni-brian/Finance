import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		price: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		expense: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		transaction: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Transaction",
			},
		],
	},
	{
		timestamps: true,
		toJSON: { getters: true },
	}
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
