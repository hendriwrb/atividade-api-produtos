const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("../frontend", { index: "index.html" }));

app.get("/produto", (req, res) => {
    const produto = {
        id: 1,
        nome: "Geladeira",
        preco: 2500,
        categoria: "Eletronicos"
    };

    res.json(produto);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});