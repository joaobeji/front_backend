document
  .getElementById("cadastroForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // const API_LOCAL = "http://localhost:3001";
    const API_NUVEM = "https://servico-backend-5g76.onrender.com";

    const formData = new FormData(this);
    const data = {
      nome: formData.get("nome"),
      preco: parseFloat(formData.get("preco")),
      descricao: formData.get("descricao"),
    };

    try {
      const response = await fetch(API_NUVEM + "/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Toastify({
          text: "Produto cadastrado com sucesso!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#28a745",
        }).showToast();
        // Opcional: Limpar o formulário após sucesso
        this.reset();
      } else {
        throw new Error("Erro ao cadastrar o produto.");
      }
    } catch (error) {
      Toastify({
        text: error.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#dc3545",
      }).showToast();
    }
  });
