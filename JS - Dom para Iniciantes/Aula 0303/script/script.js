/*const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[2])
const ul = document.getElementsByTagName('ul');


const animaistag = document.querySelectorAll('.animais img');
console.log(animaistag) // retorna uma nodelist 
console.log(animaistag[2]) // retorna o item especifico
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens


gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});
*/
// Retorne no console todas as imagens do site
const todas = document.getElementsByTagName('img');
console.log(todas)
// para retornar itens que começam com as iniciais
const imagem1 = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagem1)

const linkCSS = document.querySelectorAll('[href^="#"]');
console.log(linkCSS)
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2')
console.log(primeiroh2)
// Selecione um paragrafo pelo lenght
const ultimop = document.querySelectorAll('p');
console.log(ultimop.length)
console.log(ultimop[ultimop.length -1]);