import express from "express";
import { connectDB } from "./config/database";
import { routes } from "./config/routes";

const app = express();
const db = connectDB();
app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.clear();
  console.log("Server's running on port 3334...");
});
