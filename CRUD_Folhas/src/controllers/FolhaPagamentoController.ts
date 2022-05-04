import axios from "axios";
import { json, Request, Response } from "express";
import { FolhaPagamentoRepository } from "../repositories/FolhaPagamentoRepository";
import { FolhaPagamento } from "../models/FolhaPagamento";

const folhaPagamentoRepository = new FolhaPagamentoRepository();

export class FolhaPagamentoController {
  cadastrar(request: Request, response: Response) {
    const folha = request.body;
    const folhas = folhaPagamentoRepository.cadastrar(folha);

    //fetch ou axios
//    axios
 //     .post("http://localhost:3334/produto/cadastrar", folha)
 //     .then((response) => {
  //      console.log(response);
  //   })
     // .catch((error) => {  
      //  console.log(error);
     // });

    response.status(201).json({ message: "Folha cadastrada", data: folhas });
  }

  calcular(request: Request, response: Response) {
    folhaPagamentoRepository.calcular();
    const folhasProcessadas = folhaPagamentoRepository.listarProcessadas();
      axios
      .post("http://localhost:3334/folha/cadastrar", folhasProcessadas )
      .then((response) => {
      console.log(response);
     })
      .catch((error) => {  
      console.log(error);
      });

    
    response.status(200).json({ message: "Listagem de produtos", data: folhaPagamentoRepository.listar });
  }
  listar(request: Request, response: Response) {
    const folhas = folhaPagamentoRepository.listar();
    response.status(200).json({ message: "Listagem de produtos", data: folhas });
  }

  listarProcessadas(request: Request, response: Response) {
    const folhas = folhaPagamentoRepository.listarProcessadas();
    response.status(200).json({ message: "Listagem de produtos", data: folhas });
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
