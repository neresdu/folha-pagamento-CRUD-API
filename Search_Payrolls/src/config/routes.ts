import { Router } from "express";
import { PayrollController } from "../controllers/PayrollController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

//Produto
// routes.post("/folha/cadastrar", new PayrollController().cadastrar);
routes.get("/payroll/list", new PayrollController().list);
routes.get("/payroll/list/:cpf/:month/:year", new PayrollController().listByCpfMonthYear);


export { routes };
