// const urlApi = "http://localhost:3001";
const urlApi = "https://servico-backend-5g76.onrender.com";

// Função para deletar produto
async function deletarProduto(id) {
  // Mostrar o modal de confirmação
  const confirmarModal = new bootstrap.Modal(
    document.getElementById("confirmarDelecaoModal")
  );
  confirmarModal.show();

  // Esperar pela confirmação
  document.getElementById("confirmarDeletar").onclick = async function () {
    // Fechar o modal
    confirmarModal.hide();

    const response = await fetch(`${urlApi}/produtos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      Toastify({
        text: "Produto deletado com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#28a745",
      }).showToast();
      carregarProdutos(); // Recarrega a lista de produtos
    } else {
      Toastify({
        text: "Erro ao deletar o produto.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#dc3545",
      }).showToast();
    }
  };
}