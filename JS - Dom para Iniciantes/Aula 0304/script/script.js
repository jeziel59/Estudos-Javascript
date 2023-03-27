/*const imgs = document.querySelectorAll('img')
let i = 0;
imgs.forEach((item, index, array) => {
  console.log(item, index, array)
}) 
// caso não for passar parametro, ainda precisa dos parenteses
// let i = 0;
// imgs.forEach(() => {
// console.log(i++)

//Podemos reduzir ainda mais caso for uma expressão simples, removendo o parenteses
//imgs.forEach(() = > console.log(i++))


// para transformar HTML Collection em array, comando Array.from;

const titulos = document.getElementsByClassName('titulo'); // pega o elemento em uma variavel
const titulosArray = Array.from(titulos)  // transforma em array

titulosArray.forEach(function(item, index){ //liberado para utilizar por ex o foreach
  console.log(item, index)
})
*/
// Mostre no console cada parágrado do site
const p = document.querySelectorAll('p')
console.log(p)
// Mostre o texto dos parágrafos no console
p.forEach((item, index) =>   console.log(item.innerText))
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index)
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => (i++));
console.log(i)

