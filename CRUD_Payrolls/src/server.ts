import express from "express";
import { connectDB } from "./config/database";
import { routes } from "./config/routes";
import swaggerUi from "swagger-ui-express";
import {default as swaggerDocs} from "./swagger.json";
import cors from 'cors';
const allowedOrigins = ['http://localhost:3333','http://localhost:3334'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
const db = connectDB();
app.use(cors(options));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(routes);

app.listen(3333, () => {
  console.log("Server's running on port 3333...");
});
