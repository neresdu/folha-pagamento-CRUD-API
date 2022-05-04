import { Router } from "express";
import { FolhaPagamentoController } from "../controllers/FolhaPagamentoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

//Produto
routes.post("/folha/cadastrar", new FolhaPagamentoController().cadastrar);
routes.get("/folha/listar", new FolhaPagamentoController().listar);
routes.get("/folha/listar/:cpf/:mes/:ano", new FolhaPagamentoController().listarPorCpf);


export { routes };
