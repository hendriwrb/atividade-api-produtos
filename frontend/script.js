const listaProdutos = document.getElementById("lista-produtos");

const url = "/produto";

async function buscarProduto(){
    const resposta = await fetch(url);
    const produto = await resposta.json();

const imagens = [
    "imagens/melancia.jpg",
    "imagens/downy.jpg",
    "imagens/ps5.jpg"
];

produto.forEach((item, index) => {

const card = `
    <div class="card">
        <img src="${imagens[index]}" alt="${item.nome}">
        <h2>${item.nome}</h2>
        <p>${item.categoria}</p>
        <p class="preco">R$ ${item.preco}</p>
    </div>

    `;

    listaProdutos.innerHTML += card;
})};    

function carregarDados(){
    buscarProduto();
}

carregarDados();