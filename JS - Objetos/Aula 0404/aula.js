//STRING
//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
//aqui temos um objeto e uma string, mas abas respondem aos metodos de string
const comida = 'Pizza'; // string
const liquido = new String('Água'); //  objeto

//comida.toLocaleUpperCase() = 'PIZZA'
// liquido.toLocaleUpperCase()  = 'ÁGUA'

const comida2 = 'Pizza';
const frase = 'A melhor comida';

// Propriedade length **
// quantidade de caractere na string
comida.length; // 5 
frase.length; // 15

// Propriedade charat **
// Encontra qual a letra em determinada localização

//podemos acessar os caracteres da string cm se fosse uma array
comida2[0] // P // primeira letra da const comida2
frase[0] // A // primeira frase da const frase
frase[frase.length - 1] // a // descobre qual o compramento da string, e volta para a ultima letra, pois comça com zero

//podemos utilizar também com o comando charAt;
console.log(frase.charAt(3))
console.log(frase.charAt(frase.length - 1))

//Contatenando strings **

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

//Podemos contaternar normalmente com string + string;
const frasecompleta = frase2 + linguagem + '!!'
console.log(frasecompleta)

//ou com o termo concat
const fraseCompleta = frase2.concat(linguagem, '!!');
console.log(fraseCompleta)

// Propriedade includes **
//Procura uma string exata dentro de outra string

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

fruta.includes(listaFrutas); // false // fruta não contem toda listaFrutas
listaFrutas.includes(fruta); // true // listaFrutas contem toda fruta

//Propriedades Starts with e Endswit
//verifica se a informação passada come a ou termina na string
const fruta2 = 'Banana';

console.log(fruta.endsWith('nana')); // true

console.log(fruta.startsWith('Ba')); // true
console.log(fruta.startsWith('na')); // false


//Propriedade slice **
//corta a area indicada de uma string

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

// cortando as 3 primeiras letras da string
transacao1.slice(0, 3); // Dep 
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax


transacao1.slice(12); // cliente // corta os 12 'primeiros' caracteres e considera somente o restante
transacao1.slice(-4); // ente // corta os 4 'ultimos' caracteres da string e considera somente o restante
transacao1.slice(3, 6); // ósi //  considera somente do terceiro ao sexto caractere


//propriedade Indexof e lastindexof **
//retorna a localização do primeiro caractere(ou grupo) que ele achar conforme solicitado
// no caso de last indexof retorna o ultimo
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.indexOf('ta'); // 3
instrumento.lastIndexOf('r'); // 6

// Propriedade PADSTART **
//deixa a string com a quantidade de espaço informada, e nesses espaços coloca o infomrado na declaração da propriedade

//adicionando traços no item 0
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos[0].padStart(20, '-') //'---------------R$ 99'

// alinhando itens, dizendo que cada um deve ter 20 caracteres, e preencher com -
listaPrecos.forEach((item) => {
  console.log(item.padStart(20, '-')) 
})
//---------------R$ 99
//--------------R$ 199
//------------R$ 12000

// Propriedade repeat **
//repete a string a quantidade de vezes solicitada

const frase3 = 'Ta ';
console.log(frase3.repeat(5)); // TaTaTaTaTa


// propriedade Replace **
// substitui o valor da const pelo passado, podemos passar direto ou com regular expression;

//Direto;
let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43' // substituiu o primeiro , que encontrou por .

//regular expression **
//aqui precisamos substituir todos os espaços por ', ' 
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// passamos o valor a ser substituido dentro das chaves, e após a virgula e entre aspas o que deve ficar no lugar
listaItens = listaItens.replace(/[ ]+/g, ', '); 
//listaitens = 'Camisas, Bonés, Calças, Bermudas, Vestidos, Saias'

// propriedade Split e join **
//transforma a string em array, quebrando pelos caracteres informados. e retirnado eles;

const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' '); // quebrando quando houve espaço, caso não passar valor, quebra cada caractere em uma propriedade de string
console.log(arrayItens)
/* resultado
0:"Camisas"
1:"Bonés"
2:"Calças"
3:"Bermudas"
4:"Vestidos"
5:"Saias"
*/

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div'); 
console.log(htmlArray) 
/*
0:"<"
1:">O melhor item</"
2:"><"
3:">A melhor lista</"
4:">"
*/
// Join junta as propriedades da array em uma só string;
const htmlNovo = htmlArray.join('section');
console.log(htmlNovo) 
//<section>O melhor item</section><section>A melhor lista</section>

// Touppercase e Tolowercase **
// Deixa a string em maiuscula ou minuscula

//como exemplo vamos receber digitando pelo usuario uma string
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
//primeiro deixamos tudo em minusula, assim todas as opções são true na conferencia
(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true


// propriedade Trim **
//Remove espaços em geral, começo ou fim

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'



console.log('Exercicios')

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

//foreach transacoes 
//os dois ultimos caracteres de valor
const transacoes2 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxa = 0;
let receb = 0;

transacoes2.forEach((item) => {
  console.log(item.valor);
  if (item.descricao.startsWith('Taxa')) {
    taxa += +item.valor.slice(3)
  } else {
    receb += +item.valor.slice(3)
  }
});
console.log(taxa)
console.log(receb)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesArray = transportes.split(';')
console.log(transportesArray)


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlas = html.split('span').join('a')

console.log(htmlas)



// Retorne o último caracter da frase
const frase5 = 'Melhor do ano!';
console.log(frase5.charAt(frase5.length -1))



// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let contataxa = 0;

transacoes.forEach((item) => {
  item = item.toLocaleLowerCase()
 if (item.includes('taxa')) {
  contataxa ++
 }
})
console.log(contataxa) // = 3