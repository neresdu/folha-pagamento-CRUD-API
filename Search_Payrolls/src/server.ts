import express from "express";
import { connectDB } from "./config/database";
import { routes } from "./config/routes";
import cors from 'cors';

const allowedOrigins = ['http://localhost:3333','http://localhost:3334'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
const db = connectDB();
app.use(cors(options));
app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.clear();
  console.log("Server's running on port 3334...");
});
