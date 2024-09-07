function pesquisarJogo() {
    // Obtém a seção HTML onde os resultados da busca serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da busca
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

   if (campoPesquisa == "" || campoPesquisa == " ") {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return 
   }
   

   campoPesquisa = campoPesquisa.toLowerCase();


    // Itera sobre cada jogo da lista de jogos Atari
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();;
      if (titulo.includes(campoPesquisa) || 
      descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada resultado, formatando as informações do jogo
        resultados += `
        <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">Descrição:</p>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">Genero: ${dado.genero}</p>
            <p class="descricao-meta">Data de Lançamento: ${dado.dataLancamento}</p>
            <p class="descricao-meta">Plataforma: ${dado.plataforma}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
      }

      else if (!resultados) {
        resultados = "<p>Nada foi encontrado! Digite uma nome de um jogo válido!</p>"
      }
      
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}