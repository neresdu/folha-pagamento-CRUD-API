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
    return payroll.save()
    .then(result => {
      return response.status(201).json({message: "Payroll registred", data: payroll});
    })
    .catch(error =>{
      return response.status(400).json({message: error.message, error});
    })
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
            
            // let payrollsToProcess = payrollService.calculateNetSalary(payrolls);
            // var resultupdate = await PayrollSchema.updateMany({processed: false},payrollsToProcess)
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

  // calcular(request: Request, response: Response) {
  //   var payrolls = PayrollSchema.find( {processed: false});
  //   console.log(payrolls)
  //   // const folhasProcessadas = folhaPagamentoRepository.listarProcessadas();
  //     axios
  //     .post("http://localhost:3334/folha/cadastrar", payrolls )
  //     .then((response) => {
  //     console.log(response);
  //    })
  //     .catch((error) => {  
  //     console.log(error);
  //     });

    
  //   response.status(200).json({ message: "Listagem de produtos", data: payrolls });
  // }
  listar(request: Request, response: Response) {
    var payrolls = PayrollSchema.find( {processed: false})
    .exec()
    .then((results)=> {
      return response.status(201).json({
        payrolls: results,
        count: results.length
      });
    })
    .catch(error => {
      return response.status(500).json({
        message: error.message,
        error
      });
    });
  };

  listarProcessadas(request: Request, response: Response) {
    var payrolls = PayrollSchema.find( {processed: true});
    response.status(200).json({ message: "Listagem de produtos", data: payrolls });
  }
}
