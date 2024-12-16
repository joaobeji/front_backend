document.addEventListener("DOMContentLoaded", function () {
  // Usando fetch para carregar o conteúdo do menu.html
  fetch("menu.html")
    .then((response) => {
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(
          "Não foi possível carregar o menu: " + response.statusText
        );
      }
      return response.text(); // Retorna o conteúdo como texto
    })
    .then((data) => {
      // Insere o conteúdo carregado na div com id 'menu'
      document.getElementById("menu").innerHTML = data;
    })
    .catch((error) => {
      console.error(error); // Lida com erros de carregamento
    });
});

// Função para alternar o menu lateral
function toggleSidebar() {
  // Obtém referências aos elementos HTML do sidebar e do conteúdo principal
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");

  // Alterna a classe "collapsed" no sidebar para mostrar/ocultar
  sidebar.classList.toggle("collapsed");

  // Alterna a classe "full-width" no conteúdo principal para ajustar a largura
  mainContent.classList.toggle("full-width");
}
