import express, { json } from "express";
import { categoriesRoutes } from "./routes/categoriesRoutes";
import { specificationsRoutes } from "./routes/specificationRoutes";

const app = express();
app.use(express.json())
app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes)


app.listen(3333, () => console.log("Server is Running"))