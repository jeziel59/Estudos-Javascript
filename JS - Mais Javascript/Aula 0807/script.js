/*
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

// podemosutilizar o for off nesses itens pois eles tem Symbol(Symbol.iterator)
for(const fruta of frutas) { // para cada item de frutas
  console.log(fruta); //é realizado um log
}

for(const char of frase) { // para daca letra da string
  console.log(char); // é realizado um log
}
const buttons = document.querySelectorAll('button');



for (const btn of buttons) {
  btn.style.color = 'blue'
}

console.log(...buttons) //node list, podemos utilizar pois tem  Symbol(Symbol.iterator) 



// metodo for in puxa apenas propriedades enumeradas
const carro = {
  marca: 'Honda',
  ano: 2018,
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true, // é exibido no for in
  },
  tetoSolar: {
    value: true,
    enumerable: false, // não é exibido no for in
  }
})

for(const propriedade in carro) { 
  console.log(propriedade, carro[propriedade]);//marca Honda  ano 2018 rodas 4
 }


 const btn = document.querySelector('button');
 const btnStyles = getComputedStyle(btn); // const com todos os dados de estilo do botão
 
 for(const style in btnStyles) { // para cada estilo
   console.log(`${style}: ${btnStyles[style]}`); // mostramos o nome do estilo + o valor do estilo
 }
 */

 // Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelectorAll('li')
for(const li of lista) {
  li.classList.add('ativo');
}


// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
const win = window


for(const prop in win) {
  console.log(`${prop} : ${win[prop]}`)
}