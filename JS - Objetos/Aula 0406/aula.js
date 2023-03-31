//Arrays ** 
/*

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), 
['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
 function andar(nome) { console.log(nome) }];

dados[1][1]; // acessando o segundo item, do segundo objeto
dados[1][2]; // azul // acessando o segundo item do terceiro objeto
dados[1][2].cor; // azul // acessando a propriedade do segundo item do terceiro objeto

// Construção de Arrays   **
//Toda array herda os métodos e propriedades do protótipo do construtor Array.
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const carros0 = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang // retorna o segundo item 
carros[2] = 'Ferrari'; // atribui valor ao terceiro item
carros[10] = 'Parati'; // caso atribua em uma casa que seja sepadara, ela criara uma array do tamanho, nesse caso 11, e deixara o restante vazio
carros.length; // 11 // tamanho da array


//Array From  **
//transforma um objeto que se parece com um array em array, como por ex uma nodelist

//Nodelist para array 
let li = document.querySelectorAll('li'); // Selecionando uma NodeList em uma variavel
li = Array.from(li); // Array // li recebe Array.from() com o nome da var em propriedade

// objeto para array
const carros1 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4, // o objeto deve ter a declaração de comprimento com o lenght
}
const carrosArray = Array.from(carros); // variavel recebe Array.from() com o objeto em proriedade


// verificando se é uma array **
//Utilizado o metodo 

Array.isArray(carrosArray)
true
Array.isArray(carros2)
false

//Criação de array - Array.of Array() e New Array() **
Array.of(10); // [10] // cria uma array com um item
Array.of(1,2,3,4); // [1,2,3,4] // cria uma array com a qnt de itens passados
new Array(5); // [,,,,] // cria uma array vazia com 5 espaços
Array(5); // [,,,,] // cria uma array vazia com 5 espaços
Array(1,2,3,4); // [1,2,3,4] // cria uma array com um item


// Tamanho da array com length **

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3 // a array frutas tem 3 items (dois itens e uma array dentro da outra)

frutas[0].length; // 6 //retorna qmt de caractere do primeiro item
frutas[1].length; // 4 //retorna qmt de caractere do segundo item
frutas[2].length; // 2 // retorna a qnt de itens da array dentro da array
frutas[2][0].length; // 8 // retorna qnt de caractere do primeiro item da array dentro da array(item 2)

// Metodos modificadores Sort **
// organiza a array
// Modifica a array para nova ordem
//no caso de string deixa em ordem alfabetoca
const instrumentos3 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]
//no caso de numeros, vai de caractere em caractere e deixa em ordem, não em ordem numerica
const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

//Unshift e Push **
//aadicionar elementos no inicio ou fim da array, e retornar o length
//unshift - adiciona no começo
const carros2 = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5 // retorna que tem 5 itens
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW']; // var carros com os itens adicionados no começo
// push - adiciona no fim
carros.push('Ferrari'); // 6 //// retorna que tem 6 itens
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];// var carros com o iten adicionado no fim


// remover itens no inicio ou fim com Shift e Pop **

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford' // a variavel recebe o primeiro item da array, e tira o valor da array
carros; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda' // a variavel recebe o ultimo item da array, e tira o valor da array
carros; // ['Fiat', 'VW'];

//  Inverter array com Reverse **
//[].reverse() inverte os itens da array e retorna a nova array.

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

// Splice  **
// apartir do index passado, adiciona os elementos passados, e remove a qnt de elemento passado

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
// primeiro parametro = a partir / seundo parametro qnt a remover / e elementos a serem adicionados
carros5.splice(1, 0, 'Kia', 'Mustang'); // [] // // dps do primeiro item, adiciona e não remove
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros5.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW'] // // dps do terceiro item, remove dois itens e adiciona ferrari
carros5; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// Copy within **
//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3); // Seleciona ate terceiro item, e vai copiar do item zero ate o item 3
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//[].FILL() **
//Da valor os elementos da array

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana'); // preenche todos
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2); // preenche a partit do item 2
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3); // preenche apartir  do item 1 ate o item 3
// ['Item1', 'Banana', 'Banana', 'Item4']

//MÉTODOS DE ACESSO [].CONCAT() **
//concatenar arrays e strings

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF() **

//[].includes(valor) verifica se a array possui o valor e retorna true ou false. 
//[].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
//[].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true //sim, inclui
linguagens.includes('ruby'); // false //não inclui
linguagens.indexOf('python'); // 4 // index de python
linguagens.indexOf('js'); // 2 // index do primeiro js
linguagens.lastIndexOf('js'); // 5 // index do ultimo js

// Join - Juntar valores  Split - Separar
//[].join(separador) junta todos os valores da array e retorna uma string com eles. 
//Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

// Join
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

// Split
let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

// Slice
//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python'] // corta os 3 primeiros
linguagens.slice(1, 4); // ['css', 'js', 'php'] // corta a partir do primeiro ate o quarto

const cloneLinguagens = linguagens.slice();
*/




const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const pizza = comidas.shift()
console.log(pizza)
const macarrao = comidas.pop()
console.log(macarrao)
comidas.push('Arroz')
console.log(comidas)
comidas.unshift('Peixe', 'Batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort()
console.log(estudantes)
estudantes.reverse()
console.log(estudantes)
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section')
html = html.join('ul')
console.log(html)

html = html.split('div')
html = html.join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const original = carros.slice() // recorta todos itens, e cola na nova const
const ultimo = carros.pop()
console.log(carros)
console.log(ultimo)
console.log(original)