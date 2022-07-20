import { Router } from "express";
import { PayrollController } from "../controllers/PayrollController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

//Produto
// routes.post("/folha/cadastrar", new PayrollController().cadastrar);
routes.get("/folha/listar", new PayrollController().list);
routes.get("/folha/listar/:cpf/:mes/:ano", new PayrollController().listarByCpf);


export { routes };
