//criando a função construtora sempre com inicial maiuscula
// os parametros são passados de forma rapida dentro das chaves
/*
function Carro(modeloAtribuido, precoAtribuido, anoAtribuido) {
this.modelo = modeloAtribuido;
this.preco = precoAtribuido;
this.ano = anoAtribuido;
}
*/



// A função construtora tem a inicial maiuscula
// só compoe o objeto que será criado os itens que são adicionados com o this
function Carro2(modeloAtribuido, precoInicial, anoAtribuido) {
  const taxa = 1.2; // caso queira exibir a taxa, substitua const por this
  const precoFinal = precoInicial * taxa

  this.modelo = modeloAtribuido;
  this.preco = precoFinal;
  this.ano = anoAtribuido;
  }
  // modeloAtribuido, precoInicial, anoAtribuido
  const honda = new Carro2('Civic', 1000, 2010); 
  const volkswagem = new Carro2('Golf', 2000, 2017);
  // console retorna ~ Carro2 {modelo: 'Golf', preco: 2400, ano: 2017}

  /*---------------------------------------------------------------------*/

/*
  // função construtora para adicionar classe
  // função de nome DOM com parametro 'seletor'
  function Dom(seletor) {   
    const element = document.querySelector(seletor);  // colocando na const element o elemento passado por seletor via query selector
    this.ativo = function(classe) { // (this = parametro do construtor)(.ativo = const que ira enviar a classe) e função que recebe parametro(nome da classe)
      element.classList.add(classe); //adicionando a classe recebida por parametro ao elemento recebido na const element
    };
  }
  
  const lista = new Dom('#oi01'); // cria a variavel envia a construtora o elemento a ser selecionado pelo query selector
  lista.ativo('ativo'); // envia o nome da classe a função para atribuir ao elemento
  
  const lastLi = new Dom('li:last-child');
  lastLi.ativo('ativo');
  */
  
//nessa função construtora vamos criar 4 pessoas, onde podemos utilizar o metodo pessoa1.andar() para executar a função
//função recebendo dois parametros
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade =idade;
  //caso metodo seja ativado ira realizar a função
  this.andar = function(){
    console.log(nome + ' andou');
  }
}
// criação de pessoas
const pessoa1 = new Pessoa('Julia', 18);
const pessoa2 = new Pessoa('João', 20);
const pessoa3 = new Pessoa('Maria', 25);
const pessoa4 = new Pessoa('Bruno', 15);
//executando metodo
console.log(pessoa1.andar())

//Aqui criamos uma Constructor Function (Dom) para manipulação de elementos com QueryselectorAll
//Onde temos dois metodos capazes de incluir e remover classes
function Dom2(itens) { // Desclaração da constructor com parametro
  const element2 = document.querySelectorAll(itens)// Query Selector All com o parametro da constructor
  this.elements = element2 // metodo que retorna a lista, nesse caso, ul.elements ou item.elements retorna toda a nodelist da const selecionada
  
this.incluir = function(nomeclasse) {// metodo com função, recebendo da declaração do metodo o nome da classe a ser inclusa
  element2.forEach((tipo) => { // para cada item da lista 
  tipo.classList.add(nomeclasse) // executamos a adição da classe 
  })
}

this.remover = function(nomeremove){// metodo com função, recebendo da declaração do metodo o nome da classe a ser inclusa
  element2.forEach((tipo) => { // para cada item da lista 
  tipo.classList.remove(nomeremove)// executamos a remoção da classe 
  })
}

}

const item = new Dom2('li'); //declaração da const com a tag do elemento a ser incluso na constructor, pode ser uma classe ou uma id
item.incluir('ola') // declarando o metodo, e enviando no parametro a classe a ser inclusa
item.remover('oi1')// declarando o metodo, e enviando no parametro a classe a ser removida

const ul = new Dom2('ul');
ul.incluir('ola-ul')


