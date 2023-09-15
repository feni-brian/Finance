import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
	{
		buyer: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		productIds: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
	},
	{
		timestamps: true,
		toJSON: { getters: true },
	}
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
