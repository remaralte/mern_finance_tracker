import "dotenv/config";
import express from "express";
import type { Express } from "express"; //this line is added instead of "express, {Express} from" in first line
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records.js"; //.js added

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());        //apply middleware into endpoints => allows json into bodies of each request

//setup mongoDB connection
const mongoURI = process.env.MONGO_URI as string;

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});