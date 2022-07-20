import { Request, Response } from "express";
import { Payroll } from "../models/Payroll";
import PayrollSchema from "../models/PayrollSchema";

export class PayrollController {

    //List only processed payrolls
    list(request: Request, response: Response) {
      var payrolls = PayrollSchema.find( {processed: true})
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

    listByCpfMonthYear(request: Request, response: Response) {
      var payrolls = PayrollSchema.find( 
        { "employee.cpf": request.params.cpf,
          month: request.params.month,
          year: request.params.year
        
        })
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

}
