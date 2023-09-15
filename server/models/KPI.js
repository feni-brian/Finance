import mongoose from "mongoose";

const Schema = mongoose.Schema;

const daySchema = new Schema(
	{
		date: String,
		revenue: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		expense: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
	},
	{
		toJSON: { getters: true },
	}
);

const monthSchema = new Schema(
	{
		month: String,
		revenue: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		expenses: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		operationalExpenses: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		nonOperationalExpenses: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
	},
	{
		toJSON: { getters: true },
	}
);

const KPISchema = new Schema(
	{
		totalProfit: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		totalRevenue: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		totalExpenses: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		totalExpenses: {
			type: Number,
			get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
			set: (value) => Math.round(value * 100), // Convert input value to stored format
		},
		expensesByCategory: {
			type: Map,
			of: {
				type: Number,
				get: (value) => (value / 100).toFixed(2), // Convert stored value to currency format
				set: (value) => Math.round(value * 100), // Convert input value to stored format
			},
		},
		monthlyData: [monthSchema],
		dailyData: [daySchema],
	},
	{
		timestamps: true,
		toJSON: { getters: true },
	}
);

const KPI = mongoose.model("KPI", KPISchema);
export default KPI;
