// Função para abrir o modal de edição
function abrirModalEdicao(id, nome, preco, descricao) {
  // const API_LOCAL = "http://localhost:3001";
  const API_NUVEM = "https://servico-backend-5g76.onrender.com";

  document.getElementById("produtoId").value = id;
  document.getElementById("produtoNome").value = nome;
  document.getElementById("produtoPreco").value = preco;
  document.getElementById("produtoDescricao").value = descricao;
  var modal = new bootstrap.Modal(document.getElementById("editarModal"));
  modal.show();
}

// Função para salvar a edição do produto
async function salvarEdicao() {
  const id = document.getElementById("produtoId").value;
  const nome = document.getElementById("produtoNome").value;
  const preco = document.getElementById("produtoPreco").value;
  const descricao = document.getElementById("produtoDescricao").value;

  const response = await fetch(`${API_NUVEM}/produtos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, preco: parseFloat(preco), descricao }),
  });

  if (response.ok) {
    Toastify({
      text: "Produto atualizado com sucesso!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#28a745",
    }).showToast();
    carregarProdutos(); // Recarrega a lista de produtos
    var modal = bootstrap.Modal.getInstance(
      document.getElementById("editarModal")
    );
    modal.hide();
  } else {
    Toastify({
      text: "Erro ao atualizar o produto.",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#dc3545",
    }).showToast();
  }
}
