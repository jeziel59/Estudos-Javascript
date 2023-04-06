// Crie uma função que verifique
// corretamente o tipo de dado

const frutas = ['Banana', 'Uva'];
const frase = 'Uma String';
const carro = {marca: 'Ford'};
const li = document.querySelectorAll('li');

function verificador(obj) {
  return Object.prototype.toString.call(obj)
}
console.log(verificador(frutas))
console.log(verificador(frase))
console.log(verificador(carro))
console.log(verificador(li))
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 10,
    configurable: false, //padrao
    writable: false, //padrao
    enumerable: true,
  }
})
quadrado.lados = 20
console.log(quadrado)
// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao)
console.log(configuracao)
configuracao.width = 900
console.log(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))