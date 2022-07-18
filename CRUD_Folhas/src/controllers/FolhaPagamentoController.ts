import axios from "axios";
import { json, Request, Response } from "express";
import mongoose from "mongoose";
import PayrollSchema from "../models/PayrollSchema";
export class FolhaPagamentoController {
  async cadastrar(request: Request, response: Response) {
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
      return response.status(201).json({message: error.message, error});
    })
  }

  calcular(request: Request, response: Response) {
    var payrolls = PayrollSchema.find( {processed: false});
    console.log(payrolls)
    // const folhasProcessadas = folhaPagamentoRepository.listarProcessadas();
      axios
      .post("http://localhost:3334/folha/cadastrar", payrolls )
      .then((response) => {
      console.log(response);
     })
      .catch((error) => {  
      console.log(error);
      });

    
    response.status(200).json({ message: "Listagem de produtos", data: payrolls });
  }
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
//  alterar(request: Request, response: Response) {
//    const produtos = produtoRepository.alterar(request.body);
//    response.status(200).json({ message: "Produto alterado", data: produtos });
//  }

//  deletar(request: Request, response: Response) {
//    const id = Number.parseInt(request.params.id);
//    const produtos = produtoRepository.remover(id);
//    response.status(200).json({ message: "Produto removido", data: produtos });
//  }
}
