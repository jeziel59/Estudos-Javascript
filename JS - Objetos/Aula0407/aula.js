/*
// Diferenças Array e Map
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
  console.log(item) // qual item esta rodando a array
  console.log(index) // qual o index do item rodando 
  console.log(array) // array que esta rodando
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
//sempre utilizar esse metodo quando o intuito dor modificar os valores da array

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


// Retornando propriedades de um objeto com o reduce **

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

const listaAulas = aulas.reduce((acumulador, atual, index) => { // parametros acumulador, que recebe o valor, atual, que é cada curso, e o index que é a posição
  acumulador[index] = atual.nome; // {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'} // acumlador[index] recebe o nome de cada curso(atual)
  return acumulador; // retorna o acumulador a listaAulas
}, {}) // invez de numeros, passamos chaves para acessar o objeto


// Reduce Right **
// Inverte a ordem de retorno do reduce

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


// Some **
// se pelo menos uma das interações for verdadeira, retorna true

const frutas2 = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => { // variavel que vai receber o valor booleano
  return item == 'Uva' // retorna true ou false dependendo se a variavel tiver o item especificado
})


// Every **
// Se todas as interações forem verdadeiras, retorna true, caso uma seja false retorna false

// verificando se todos os valores sao verdadeiros
const every = frutas2.every((item) => { // variavel que vai receber o valor booleano
  return item  // se dentro da array tiver qualquer valor como string vazia, null, undefined, retornara false
})

// verificando se todos os numeros são maiores que 3
const numeros = [6, 43, 22, 88, 101, 29];
const maior3 = numeros.every((item) => {
  return item > 3 // se maior que 3, recebe true
})

// Find e FindIndex são ferramentas de busca que param caso encontrem alguma afirmação verdadeira

// Find **
//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. 

const numeros2 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros2.find(x => x > 45); // 88 // se a afirmação for verdadeira, retorna o conteudo da string

// FindIndex **
//ao invés de retornar o conteudo, retorna o index que encontrou 

const buscaUva = frutas2.findIndex((item) => {
  return item === 'Uva' // 3 // retorna o index que a string uva se encontra 
})


// Filter **
// Já o filter retorna uma array, então faz uma busca completa

// Buscando apenas valores verdadeiros em uma array 
const frutas3 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayFrutas = frutas3.filter((item) => {
  return item // (3) ['Banana', 'Uva', 'Maçã']
})

//Buscando numerosmaiores 
const numeros4 = [6, 43, 22, 88, 101, 29];
const buscaMaior = numeros.filter(x => x > 45); // [88, 101]

// Filter em objetos **

const aulas2 = [
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

const aulasMaiores15 = aulas2.filter((aula) => { 
  return aula.min > 15; // acessando objeto, retorna o objeto
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]



*/

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const  arrayCursos = Array.from(cursos)
const ObjetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
})

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores = numeros.filter((item) => {
  return item > 100
})


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixo = instrumentos.some((item) => {
  return item === 'Baixo'
})

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const total = compras.reduce((acumulador, item, index) => {
  const limpo = +item.preco.replace(',', '.').replace('R$ ', '')
  return acumulador + limpo
},0)

