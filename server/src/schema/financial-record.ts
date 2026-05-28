//schema = structural blueprint or framework that defines how data is organized
import mongoose from "mongoose";

//how each record contains data = schema
interface FinancialRecord { 
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

//schema in a way mongoose understanda/can read
const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
    userId: { type: String, required: true},
    date: { type: Date, required: true},
    description: { type: String, required: true},
    amount: { type: Number, required: true},
    category: { type: String, required: true},
    paymentMethod: { type: String, required: true}
});

//create model from schema                  //interface     //record name       //record blueprint(schema)
const FinancialRecordModel = mongoose.model<FinancialRecord>("FinancialRecord", financialRecordSchema);

export default FinancialRecordModel;