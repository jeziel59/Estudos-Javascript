console.log ('exercicios')
// Crie uma função para verificar se um valor é Truthy
function VF(valor) {
  if (!!valor) {
    return console.log(`o valor é Truthy`)
  } else {
    return console.log('o valor é Falsy')
  }
}
VF(3)
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function lados(lado) {
  lado = lado * 4
  return lado
}
console.log(lados(20)) 
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeSobrenome(nome,sobrenome) {
  return (nome +' '+ sobrenome)
}
console.log(nomeSobrenome('Jeziel','Silva'))
// Crie uma função que verifica se um número é par
function parImpar(num) {
  if (num %2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(parImpar(10))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(informa) {
  console.log(typeof informa)
}
tipo('jeziel')
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){console.log('Jeziel')})
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));