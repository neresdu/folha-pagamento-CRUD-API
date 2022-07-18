import { Request, Response } from "express";
import { FolhaPagamentoRepository } from "../repositories/FolhaPagamentoRepository";
import { Payroll } from "../models/FolhaPagamento";

const folhaPagamentoRepository = new FolhaPagamentoRepository();

export class PayrollController {

    cadastrar(request: Request, response: Response){
        console.log(request.body)
        const folhasRecebidas: Payroll[] = request.body;
        const folhas = folhaPagamentoRepository.cadastrar(folhasRecebidas);
        response.status(201).json({ message: "Payroll registred", data: folhas });
    }
    listar(request: Request, response: Response) {
        const folhas = folhaPagamentoRepository.listar();
        response.status(200).json({ message: "Listagem de produtos", data: folhas });
      }
      listarPorCpf(request: Request, response: Response) {
        const folhas = folhaPagamentoRepository.listarPorCpf(request.params.cpf, parseInt(request.params.mes) , parseInt(request.params.ano));
        response.status(200).json({ message: "Listagem de produtos", data: folhas });
      }

}
