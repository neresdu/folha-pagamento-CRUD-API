import { Router } from "express";
import { PayrollController } from "../controllers/PayrollController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de Produtos" });
});

//Produto
routes.post("/payroll/register", new PayrollController().register);
routes.get("/payroll/calculate", new PayrollController().calculate);
export { routes };
