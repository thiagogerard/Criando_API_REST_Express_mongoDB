import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (err) => {
    console.error("erro de conexao", err)
});

conexao.once("open", () => {
    console.log("conexao feita com sucesso");
});

const app = express();
routes(app);

export default app;