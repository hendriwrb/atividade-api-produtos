const listaProdutos = document.getElementById("lista-produtos");

const url = "/produto";

async function buscarProduto() {
    const resposta = await fetch(url);
    const produto = await resposta.json();

    const card = `
        <div class="card">
            <h2>${produto.nome}</h2>
            <p>Categoria: ${produto.categoria}</p>
            <p class="preco">Preço: R$ ${produto.preco}</p>
        </div>
    `;

    listaProdutos.innerHTML = card;
}

function carregarDados() {
    buscarProduto();
}

carregarDados();