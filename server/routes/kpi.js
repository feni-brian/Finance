import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();
router.get("/kpis", async (request, result) => {
	try {
		const kpis = await KPI.find();
		result.status(200).json(kpis);
	} catch (error) {
		result.status(404).json({ message: error.message });
	}
});

export default router;
