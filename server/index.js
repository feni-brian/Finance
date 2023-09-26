import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import morgan from "morgan";
import { Writable } from "stream";
import { kpis, products, transactions } from "./data/data.js";
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";

/* CONFIGURATIONS */
dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

/* MONGOOSE SETUP */
const port = process.env.PORT || 9000;
const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/test";
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		app.listen(port, () => console.log(`Listening on server port: ${port}`));
		/* ADD DATA ONE TIME ONLY OR AS NEEDED */
		// await mongoose.connection.db.dropDatabase();
		// KPI.insertMany(kpis);
		// Product.insertMany(products);
		// Transaction.insertMany(transactions);
	})
	.catch((error) => console.log(`${error} did not connect`));

/*

// Create writable streams for stdout and stderr
const getStdOutStream = new Writable({
	write: (chunk, encoding, callback) => {
		// Implement your custom handling for stdout here
		const message = chunk.toString(); // Convert the chunk to a string
		// Your custom logic to handle stdout, e.g., log to a file or send to a logging service
		console.log(`OUTPUT: ${message}`);
		callback();
	},
});

const getStdErrStream = new Writable({
	write: (chunk, encoding, callback) => {
		// Implement your custom handling for stderr here
		const errorMessage = chunk.toString(); // Convert the chunk to a string
		// Your custom logic to handle stderr, e.g., log to a separate error file or alert
		console.error(`ERROR: ${errorMessage}`);
		callback();
	},
});

const uri = process.env.MONGODB_URL;
const myConsole = new console.Console(getStdOutStream, getStdErrStream);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		myConsole.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(myConsole.dir);

*/
