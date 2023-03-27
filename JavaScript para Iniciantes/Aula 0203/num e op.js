var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000 //exponencial, a qnt após o 'e' é a quantidade de 0 após o numero

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16 // 2*2*2*2=16
var modulo = 14 % 5; // 4 // resto da divisão, 10/5 - resto 4

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

var total1 = 20 + 5 * 2; // 30 // Irá seguir automaticamente a ordem aritmetica, primeiro multiplicação ou divisão, depois subtraçaõ ou adição
var total2 = (20 + 5) * 2; // 50 // é possivel priorizar uma expressão, para sair da ordem aritmetica
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var x = 5;
console.log (x++) // = 5 //Declara primeiro, depois incrementa
console.log(x) // = 6

var y = 5;
console.log (++x) // = 6 // incrementa e declara
console.log(x) // = 6
//Caso fosse utilizado o const, não seria possivel fazer a operação, pois ele é inalteralevel
// o mesmo funciona para -- ou ++ 

var idade = +'28'; // o sinal + transforma a string em number
// caso a string tenha apenas numeros, consegue realizar operaçãos, mas caso tenha alguma letra se torna NaN
console.log (idade)


// Qual o resultado da seguinte expressão?
var totalteste = 10 + 5 * 2 / 2 + 20;
console.log(totalteste)

// Crie duas expressões que retornem NaN
var ex1 = 'text 1';
var ex2 = 5;
var totalex = ex1 / ex2
console.log(totalex)
// Somar a string '200' com o número 50 e retornar 250
let ex3 = +'200'
let ex4 = 50 
let totalex2 = ex3 + ex4 
console.log (totalex2)
// Incremente o número 5 e retorne o seu valor incrementado
let ex5 = 5
console.log(++ex5)
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2
console.log(pesoPorDois + unidade)