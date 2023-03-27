

var possuiGraduacao = true; //caso seja true, ira retornar o if, caso false, retorna o else
if(possuiGraduacao) { 
  console.log('Possui graduação');
} else { 
  console.log('Não possui graduação');
}

var possuiGraduacao = true;
var possuiDoutorado = true;
// caso o segundo seja verdadeiro, retorna o if
if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
// caso o segundo seja falso, retorna o else if
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
  // caso o primeiro seja falso retorna o else
} else {
  console.log('Não possui graduação');
}

10 > 5; // true // maior que
5 > 10; // false // maior que
20 < 10; // false //  menor que
10 <= 10 // true menor ou igual
10 >= 11 // false maior ou igual
// para igual
10 == '10'; // true // levemente verdadeiro // string e number, porem iguais
10 == 10; // true // Levemente verdadeiro // dois number
10 === '10'; // false // estritamente falso // number e string
10 === 10 // true // estritamente verdadeiro // number e number
// para diferente
10 != 15 // true // levemente verdadeiro // dois numeros diferentes 
10 != '10' // false // levemente falso //  dois numeros iguais, porem number e string
10 !== '10' // true // estritamente falso // iguais, porem number e string

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

//|| Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

//Retorna o primeiro valor true que encontrar

// Switch - opção caso e ou, Caso uma opção seja escolhida ela é selecionado, ou é verificado a proxima
var corFavorita = ''; // valor recebido
switch (corFavorita) {
  case 'Azul':// caso azul essa é selecionado
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

var carro = '';
switch (carro) {
  case 'porche':
    console.log('Porsche');
    break;
  case 'ferrari':
    console.log('Ferrari')
    break;
  default:
    console.log ('Escolha um carro!')
}


console.log ('Exercicio')
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var jeziel = 28
var isabela = 21
if (jeziel > isabela) {
  console.log (`Jeziel é ${jeziel - isabela} anos mais velho que Isabela`)
} else if (jeziel=== isabela){
  consolel.log ('é igual')
} else {
  console.log(`Isabela é ${isabela - jeziel} anos mais velha que jeziel`)
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//3 - true
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//v
var idade = 28; //v
var possuiDoutorado = false;//f
var empregoFuturo;//f
var dinheiroNaConta = 0;//f

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log ('Brasil tem mais habitantes')
} else {
  console.log ('China tem mais habitantes')
}
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');//f
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');//cão
} else {
  console.log('Falso');
}