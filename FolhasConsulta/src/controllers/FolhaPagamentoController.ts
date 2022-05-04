import { Request, Response } from "express";
import { FolhaPagamentoRepository } from "../repositories/FolhaPagamentoRepository";
import { FolhaPagamento } from "../models/FolhaPagamento";

const folhaPagamentoRepository = new FolhaPagamentoRepository();

export class FolhaPagamentoController {

    cadastrar(request: Request, response: Response){
        console.log(request.body)
        const folhasRecebidas: FolhaPagamento[] = request.body;
        const folhas = folhaPagamentoRepository.cadastrar(folhasRecebidas);
        response.status(201).json({ message: "Produto cadastrado", data: folhas });
    }
    listar(request: Request, response: Response) {
        const folhas = folhaPagamentoRepository.listar();
        response.status(200).json({ message: "Listagem de produtos", data: folhas });
      }
      listarPorCpf(request: Request, response: Response) {
        const folhas = folhaPagamentoRepository.listarPorCpf(request.params.cpf, request.params.mes, request.params.ano);
        response.status(200).json({ message: "Listagem de produtos", data: folhas });
      }

}
