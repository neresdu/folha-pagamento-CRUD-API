import { Router } from "express";
import { PayrollController } from "../controllers/PayrollController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

routes.get("/payroll/list", new PayrollController().list);
routes.get("/payroll/list/:cpf/:month/:year", new PayrollController().listByCpfMonthYear);
routes.get("/payroll/list/:cpf", new PayrollController().listByCpf);
routes.get("/payroll/list/:month/:year", new PayrollController().listByMonthYear);

export { routes };
