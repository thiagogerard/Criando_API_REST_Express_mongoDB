import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000; //posta utilizada nessa API. 

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

app.listen(PORT, () => {
    console.log("servidor escutando!");
});