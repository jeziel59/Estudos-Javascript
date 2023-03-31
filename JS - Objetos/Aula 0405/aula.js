

//Verifica se é um not a number **
Number.isNaN(NaN); // true // is not a number? true
Number.isNaN(4 + 5); // false is not a number? false

//Verifica se é um numero integral  **
Number.isInteger(20); //  true // inteiro
Number.isInteger(23.6); // false // tem decimal

// Transformar string em nunber Caso ela começe com o numero **

// parseFloat transforma em number mesmo com decimal
Number.parseFloat('99.50'); // 99.5 // transforma em Number
Number.parseFloat('100 Reais'); // 100 // transforma em Number
Number.parseFloat('R$ 100'); // NaN // não transforma pois tem caractere na frente

//parseInt transforma em numero integral
// 10 por padrão, significa casas decimais
parseInt('99.50', 10); // 99 // transforma em integral
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100
 
// toFixed **
//Arredonda com base no total de casas em argumento
const preco = 2.99;
preco.toFixed(); // 3 // arredondou pra cima
const carro = 1000.455;
carro.toFixed(2) // 1000.46 // com argumento de invez de 3, duas casas decimais, arredondou pra baixo
const preco2 = 1499.49;
preco2.toFixed() // 1499 // arredondou ora baixo
const preco3 = 10.32434;
console.log(preco3.toFixed()) // 10

// toString  **
//Transforma o Number em String

const preco4 = 2.99;
preco.toString(10); // '2.99'

//localeString **
//Transforma o number em uma string com a moeda indicada
// a linguagem, seguido de um objeto com style e currency
const reais = 59.60;
const stringReal = reais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(stringReal)

//MATH
//Transformar em positivo 
Math.abs(-5.5); // 5.5 // Transforma em positivo
//Arredondar
Math.ceil(4.8334); // 5 // Arredonda pra cima 
Math.ceil(4.3); // 5 // Arredonda pra cima

Math.floor(4.8334); // 4 // arredonda pra baixo
Math.floor(4.3); // 4 // arredonda pra baixo

Math.round(4.8334); // 5 // arredonda pro mais proximo 
Math.round(4.3); // 4 // arredonda pro mais proximo 

//Min e max

Math.max(5,3,10,42,2); // 42 // retorna o maior
Math.min(5,3,10,42,2); // 2 // retorna o menor 

//gerar numero aleatorio
Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
console.log(Math.floor(Math.random() * 100)) // entre 0 e 100 arredondando para baixo,
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
// numero maximo > numero minumi +1 e + numero minimo
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
//Math.floor(Math.random() * (max - min + 1)) + min; 


// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio) 

// Retorne o maior número da lista abaixo
const numeros0 = '4, 5, 20, 8, 9';
const numerosNum = numeros0.split(', ')
const numeroMax = Math.max(...numerosNum)
console.log(numeroMax)
// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
console.log('teste')
let listaPrecos = ['R$    59,9669', ' R$ 100,222',
                     'r$ 230  ', 'r$  200'];
                     console.log(listaPrecos)


//listaPrecos = [limpar(listaPrecos[0]),limpar(listaPrecos[1]),limpar(listaPrecos[2]),limpar(listaPrecos[3])]
let soma = 0;
listaPrecos.forEach((preco) =>{
  soma += limpar(preco)
})
console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

function limpar(itens) {
  itens = +itens.toUpperCase().replace('R$', '').replace(',', '.').trim() 
  itens = +itens.toFixed(2)
  return itens/*.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})*/
}
function limpar2(itens) {
  itens = +itens.toUpperCase().replace('R$', '').replace(',', '.').trim() 
  itens = +itens.toFixed(2)
  return itens.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}


listaPrecos = [
limpar2(listaPrecos[0]),
limpar2(listaPrecos[1]),
limpar2(listaPrecos[2]),
limpar2(listaPrecos[3])
]

console.log(listaPrecos)