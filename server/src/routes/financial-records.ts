//routes = endpoints
import express from "express";
import type { Request, Response, Router } from "express";
import FinancialRecordModel from "../schema/financial-record.js";
import { createWatchProgram } from "typescript";

const router = express.Router();

//Route 1 : get request => list of all expenses + incomes from user => retrieve all data from DB that matches userid of user
router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
    //try to find all records in FinancialRecordModel
    try{
        const userId = req.params.userId as string;
        const records = await FinancialRecordModel.find({ userId: userId });
        if (records.length === 0){ 
            return res.status(404).send("No records found for user.");
        }
        res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    } 
}); 


//Route 2: post request => add a new record
router.post("/", async (req: Request, res: Response) => {
    try{
        const newRecordBody = req.body;
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(200).send(savedRecord);
    } catch (err) {
        res.status(500).send(err);
    } 
}); 


//Route 3: put request => update a record
router.put("/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await FinancialRecordModel.findByIdAndUpdate(id, newRecordBody, {new: true});
        if (!record) return res.status(404).send();
        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    } 
});  


//Route 4 : delete request => delete record
router.delete("/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const record = await FinancialRecordModel.findByIdAndDelete(id);
        if (!record) return res.status(404).send();
        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    } 
}); 

export default router;