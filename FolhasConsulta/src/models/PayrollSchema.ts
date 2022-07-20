import mongoose, { Model, model, Schema, Document, connect } from "mongoose";
import { Payroll } from "./Payroll";

const payrollSchema: Schema = new Schema<Payroll>({
    id: { type: Number },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    workedHours: { type: Number, required: true },
    hourValue: { type: Number, required: true },
    grossSalary: { type: Number },
    irrf: { type: Number },
    inss: { type: Number },
    fgts: { type: Number },
    processed: { type: Boolean },
    sent: { type: Boolean },
    netSalary: { type: Number },
    employee: {
        name: { type: String, required: true },
        cpf: { type: String, required: true },
    },
    
},
{
    timestamps: true,
}
);
export default mongoose.model<Payroll>('Payroll', payrollSchema, "Payrolls");

