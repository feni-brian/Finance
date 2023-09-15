import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();
router.get("/transactions", async (request, result) => {
	try {
		const transactions = await Transaction.find()
			.limit(50)
			.sort({ createdOn: -1 });
		result.status(200).json(transactions);
	} catch (error) {
		result.status(404).json({ message: error.message });
	}
});

export default router;
