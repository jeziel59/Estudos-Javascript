//Navegação por tabs

// Primeiro selecionamos a lista que será clicada
const tabMenu = document.querySelectorAll('.js-tabmenu li');
//Depois a lista que irá mostrar/ocultar o conteudo
const tabContent = document.querySelectorAll('.js-tabcontent section')
// aqui nos deixamos o primeiro item por padrão, para não iniciar vazia
tabContent[0].classList.add('ativo')

//coloque toda a verificação dentro de uma função verificando se as variaveis tem lenght,
//codigo só ocorre se as duas seções tiverem comprimento, forem verdadeiras
if(tabMenu.length && tabContent.length) {
//começando com o foreach para dar cada um da lista o evento click, pegando junto o index
/*'item' é o parametro interno, 'index' é o numero exato do item que foi ativdo*/ 
  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => { // ao evento do click
      activeTab(index); //ativa a função activeTab enviando o numero do index /*Index é o numero exato do item que foi ativado*/
    })
  });
  //crie uma classe com display none, para ser adicionada aos elementos que não tiverem sendo utilizados
  //função responsavel por adicionar e remover a classe
  function activeTab(index) { // ativa a função com o parametro index recebido 
    tabContent.forEach((section) => { // para cada sessão /*section é um nome escolhido para o parametro da variavel tabContent*/ 
      section.classList.remove('ativo') // ele remove a classe ativo de todos
    })
    tabContent[index].classList.add('ativo') // e adiciona a classe ativo para o item da array(index) recebido
  }
}