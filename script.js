// const API_LOCAL = "http://localhost:3001";
const API_NUVEM = "https://servico-backend-5g76.onrender.com";


// Função para carregar produtos
async function carregarProdutos() {
  const response = await fetch(API_NUVEM + "/produtos");
  const produtos = await response.json();
  const lista = document.getElementById('produto-lista');
  lista.innerHTML = '';
  produtos.forEach(produto => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${produto.id}</td>
      <td>${produto.nome}</td>
      <td>${produto.preco}</td>
      <td>${produto.descricao}</td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="abrirModalEdicao(${produto.id}, '${produto.nome}', ${produto.preco}, '${produto.descricao}')">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deletarProduto(${produto.id})">Deletar</button>
      </td>
    `;
    lista.appendChild(row);
  });
}

// Carregar produtos ao carregar a página
carregarProdutos();
