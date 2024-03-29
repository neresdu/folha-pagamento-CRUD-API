import axios from "axios";
import { json, Request, Response } from "express";
import mongoose from "mongoose";
import { Payroll } from "../models/Payroll";
import PayrollSchema from "../models/PayrollSchema";
import { PayrollService } from "../config/services/PayrollService";

const payrollService = new PayrollService();
export class PayrollController {

  async register(request: Request, response: Response) {
    const payroll = new PayrollSchema({
      _id: new mongoose.Types.ObjectId(),
      month: request.body.month,
      year: request.body.year,
      workedHours: request.body.workedHours,
      hourValue: request.body.hourValue,
      processed: false,
      sent: false,
      employee: {
        name: request.body.employee.name,
        cpf: request.body.employee.cpf
      }
    });
    const payrollAlreadyExist = await PayrollSchema.find(
      {
        "employee.cpf": payroll.employee.cpf,
        month: payroll.month,
        year: payroll.year 
      })
      console.log(payrollAlreadyExist)
      if(payrollAlreadyExist.length > 0){
        return response.status(400).json({message: "Payroll already registred, _id: ", data: payrollAlreadyExist});
        
      }
      if(payrollAlreadyExist.length <= 0){
        console.log("Nao existe payroll igual");
        
        return payroll.save()
        .then(result => {
          return response.status(201).json({message: "Payroll registred", data: payroll});
        })
        .catch(error =>{
          return response.status(400).json({message: error.message, error});
        })
      }


  }
  calculate(request: Request, response: Response) {

    var payrolls: Payroll[] = [];
    PayrollSchema.find( {processed: false})
    .lean()
    .exec()
    .then(async (results)=> {
      for (let index = 0; index < results.length; index++) {
        if(results[index].processed == false){
          payrolls[index] = results[index];
        }
      }
            var resultUpdate = 0;
            for (let i = 0; i < payrolls.length; i++) {
              let payrollToUpdate = payrollService.calculateNetSalary(payrolls[i]);
              resultUpdate += (await PayrollSchema.updateOne({processed: false},payrollToUpdate).lean()).modifiedCount;
            }
             return response.status(201).json({message: resultUpdate + " Payrolls processed"});
    })
    .catch(error => {
      return response.status(500).json({
        message: error.message,
        error
      });
    });

      


  };

}
