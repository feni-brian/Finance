import express from "express";
import Product from "../models/Product.js";

const router = express.Router();
router.get("/products", async (request, result) => {
	try {
		const products = await Product.find();
		result.status(200).json(products);
	} catch (error) {
		result.status(404).json({ message: error.message });
	}
});

export default router;
