const listaProdutos = document.getElementById("lista-produtos");

const url = "/produto";

async function buscarProduto() {
    const resposta = await fetch(url);
    const produto = await resposta.json();

produto.forEach(item => {
    const card = `
        <div class="card">
            <h2>${item.nome}</h2>
            <p>Categoria: ${item.categoria}</p>
            <p class="preco">R$ ${item.preco}</p>
        </div>
    `;

    listaProdutos.innerHTML += card;
})};
function carregarDados() {
    buscarProduto();
}

carregarDados();