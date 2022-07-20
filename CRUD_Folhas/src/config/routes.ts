import { Router } from "express";
import { PayrollController } from "../controllers/PayrollController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de Produtos" });
});

//Produto
routes.post("/folha/cadastrar", new PayrollController().register);
routes.get("/folha/calcular", new PayrollController().calculate);
routes.get("/folha/listar", new PayrollController().listar);
routes.get("/folha/listarprocessadas", new PayrollController().listarProcessadas);
//routes.delete("/produto/deletar/:id", new ProdutoController().deletar);

export { routes };
