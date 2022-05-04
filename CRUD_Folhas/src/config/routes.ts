import { Router } from "express";
import { FolhaPagamentoController } from "../controllers/FolhaPagamentoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de Produtos" });
});

//Produto
routes.post("/folha/cadastrar", new FolhaPagamentoController().cadastrar);
routes.get("/folha/calcular", new FolhaPagamentoController().calcular);
routes.get("/folha/listar", new FolhaPagamentoController().listar);
routes.get("/folha/listarprocessadas", new FolhaPagamentoController().listarProcessadas);
//routes.delete("/produto/deletar/:id", new ProdutoController().deletar);

export { routes };
