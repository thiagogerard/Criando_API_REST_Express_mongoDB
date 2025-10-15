import http from "http";

const PORT = 3000; //posta utilizada nessa API. 

const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("servidor escutando!");
});