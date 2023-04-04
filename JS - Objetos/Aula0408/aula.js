// Propriedades **
// Podemos utilizar as propriedades como length em uma função
//Caso a função resulte em uma string, tera propriedades de string, caso numero Number

function somar(n1, n2) {
  return n1 + n2;
}
console.log(somar.length) // 2 argumentos
console.log(somar.name) // 'somar' // nome da funcao

// function call **

//Call é uma função que ajuda a alterar o contexto da função chamada. 
//Em termos leigos, ajuda a substituir o valor this dentro de uma função
//por qualquer valor que você desejar.


//function.call(this, arg1, arg2, ...) executa a função, sendo possível 
//passarmos uma nova referência ao this da mesma.

//dois objetos 
const carro = {
  marca: 'Ford',
  ano: 2018
}
const carro2 = {
  marca: 'Vw',
  ano: 2019
}

// função que recebe as propriedades dos objetos
function descricaoCarro() {
  console.log(this.marca + ' Ano ' + this.ano);
}

descricaoCarro.call(carro) // Ford Ano 2018
descricaoCarro.call(carro2) // Vw Ano 2019

// This em Call **
//O valor de this faz referência ao objeto criado durante a construção do objeto (Constructor Function). 
//Podemos trocar a referência do método ao this, utilizando o call().


const carros = ['Ford', 'Fiat', 'VW'];
// foreach normalmente 
carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro
//foreeach com call 
carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

// podemos utilizar a foreach criada para carros para realizar com frutas
// ao realizar a call o que importa é o parametro passado depois da call

const frutas = ['Banana', 'Pêra', 'Uva'];
carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta

// Exemplo real

// 1- criando seletor de elemento
function Dom(seletor) {
  this.element = document.querySelector(seletor); // "seletor e element é o argumento"
};

// 2- criando aplicador de classe para o seletor
Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

// 3- selecionando o ul com o seletor dom
const lista = new Dom('ul');

// 4 - o selecionado chama o aplicador com o valor ativar 
lista.ativo('ativar'); // ul recebe classe ativar
console.log(lista);

// 5 - selecionando um elemento em um objeto
const novoSeletor = {
  element: document.querySelector('li') // essencial a propriedade ter o mesmo nome, nesse caso 'element' para que possa utilizar o seletor
}
//  6- aplicador com call recebendo novo objeto e a classe ativar 
Dom.prototype.ativo.call(novoSeletor, 'ativar'); // li recebe ativar

//O novo valor de this deve ser semelhante a estrutura do valor do this original do método. 
//Caso contrário o método não conseguirá interagir de forma correta com o novo this.


// ARRAY'S E CALL **
//colocando a propriedade de array em um htmlcollection sem transformar em array 

// const li recebendo uma lista de elemento (nodelist)
const li = document.querySelectorAll('li');
//const filtro // Array.prototype com a propriedade filter com call referenciando a const li
const filtro = Array.prototype.filter.call(li, (item) => {
  //retornando os itens que tenha class na classlist   
  return item.classList.contains('ativo')
})
console.log(filtro)






// Apply **
//O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que
// os argumentos da função são passados através de uma array.

const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar


// bIND **
//Diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim 
//retornar a mesma com o novo contexto de this.


// função construtora normal, com uma function
const carro3 = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
//função funciona normalmente com a function
carro3.acelerar(100, 20);// Ford acelerou 100 em 20

//criando um novo objeto 
const honda = {
  marca: 'Honda',
  ano: 2019,
};
// com o metodo bind puxamos a função de dentro do construtor, e passamos os argumentos
// criando const que utiliza a construtora e a função, mas com o bind no objeto honda
const acelerarHonda = carro3.acelerar.bind(honda); // caso tenha um argumento fixo, colocar junto a declaração da cont; bind(honda, 100)
acelerarHonda(200, 10);// Honda acelerou 200 em 10

