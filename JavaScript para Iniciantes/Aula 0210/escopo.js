/*
Variáveis criadas com var, vazam o bloco. Por isso com a introdução 
o ES6 a melhor forma de declarmos uma variável é utilizando const e let, 
pois estas respeitam o escopo de bloco.
*/ 
//Variáveis criadas com var, vazam o bloco. Por isso com a introdução do 
//ES6 a melhor forma de declarmos uma variável é utilizando const e let, 
//pois estas respeitam o escopo de bloco.
{
  var carro = 'Fusca';
  const ano = 2018;
} // exemplo de var vazando o bloco
console.log(carro); // Carro
//console.log(ano); // erro ano is not defined

const data = {
  dia: 20,
  ano: 2023,
}
data.dia = 29 // Possivel alterar propriedades do objeto const
console.log(data) 

const nome = 'jeziel'
console.log(nome)
//const nome = 'carlos' // impossivel alterar o valor de uma const

// Por qual motivo o código abaixo retorna com erros?
{ 
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
let numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
