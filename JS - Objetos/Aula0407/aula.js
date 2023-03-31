/*// Diferenças Array e Map
// Se o objetivo for uma ação de por exemplo, adicionar classe a elementos html, é utilizado o foreach
// caso o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array
//com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.




// foreach **
//a função de callback é executada para cada item da array,
//Ela possui três argumentos, 

//item (valor do item da array), 
//index (index do valor na array) 
//array (array original). 
const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach(function(item, index, array) { 
  console.log(item) // qual item esta todando a array
  console.log(index) // qual o index do item rodando 
  console.log(array) // array que esta rodando
  //ex;// array[index] = teste // = modifica toda array, dando valor teste aos itens
  console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});


//Arrow Function **

const li = document.querySelectorAll('li');
//caso de só um argumento, nao precisa de chaves
li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});

//Modificando Array original com foreach  **

const carros2 = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
  array[index] = 'Carro ' + item; //array recebe informação conforme index
});

carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']


// Map - Cria nova array com dados modificados **
//Metodo correto de retornar dados modificados um a um, como no foreach
//sempre utilizar esse metodo

const carros3 = ['Ford', 'Fiat', 'Honda'];
const novosCarros = carros3.map((item) =>{
  item += ' Novo'
  return item // sempre retornar o item modificado
})
//novosCarros
//['Ford Novo', 'Fiat Novo', 'Honda Novo']

//ex retornando uma array com um elemento da outra array
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

// caso queira retornar apenas um valor, 
// cada aula(item) retorna aula.min
tempoAulas = aulas.map(aula => aula.min) // falando com cada aula > o valor de aula.min
console.log(tempoAulas) // [15, 10, 20, 25]

// Criando uma const com uma function **

const nomeAulasFunction = aulas.map(function(aula) {
  return aula.nome
});
//quanto ativa, const retorna; ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// realizando map, chamando uma const com função **
const nomeAulasF = function(aula) { // array recebendo função que recebe aula
    return aula.nome// e retorna aula.nome
} 
// Também pode ser um arrow ;
 const nomeAulasF2 = aula => aula.nome

const arrayNomeAulas = aulas.map(nomeAulasF);  // nova array realizando map com a const nomeAulasF que tem uma função

*/

// Reduce **
// Funciona da mesma forma que o map e o foreach
// Ele tem uma propriedade acumuladora, que é destacada entre as chaves da função
// esse valor acumula a cada rodada 
// podendo realizar equações retornar o valor final


// Reduce Equações
const aulas = [10,25,30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => { // item adicional chamado aqui de "acumulador"
  console.log(acumulador, item, index, array) // apenas para acompanhamento, 
  return acumulador + item // a cada rodada ele acumula o item + o numero predefinido, nesse caso 0
}, 0) // numero pre definido, // caso não seja passado nenhum valor, considerado 0 e a primeira interação não é realizada, apenas somado com as outras

console.log (reduceAulas) // 65 // soma total de todos os itens

//Reduce maior ou menor numero

const numeros = [10,25,30,3,43,2];

const maiorNumero = numeros.reduce((anterior, atual) => { // passado o item de acumulador como anterior e o item cm atual
  if (anterior > atual) 
    return anterior
  else
    return atual
}, 0) // adicionado numero zero para acontecer desde o primeiro loop
console.log(maiorNumero)
