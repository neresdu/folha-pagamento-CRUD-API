import { Router } from "express";
import { PayrollController } from "../controllers/PayrollController";

const routes = Router();


routes.post("/payroll/register", new PayrollController().register);
routes.get("/payroll/calculate", new PayrollController().calculate);
export { routes };
