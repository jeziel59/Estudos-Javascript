const section = document.querySelector('.animais-lista');
const altura = section.clientHeight
const alturaScroll = section.scrollHeight
//section.clientHeight
//370
//section.scrollHeight
//656
//section.clientHeight; // height + padding
//section.offsetHeight; // height + padding + border
//section.scrollHeight; // height total, mesmo dentro de scroll

const animaisTop = section.offsetTop; // Distância entre o topo do elemento e o topo da página
console.log(animaisTop)
const animaisLeft = section.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log(animaisLeft)

const primeiroH2 = document.querySelector('h2');
console.log(primeiroH2)
const rect = primeiroH2.getBoundingClientRect();
console.log(rect) // retorna todas as cordenadas do objeto
console.log(rect.top) // mesmo que offsetTop
if (rect.top < 0) {
  console.log('Passou do elemento')
}

console.log('window')
console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço

window.pageYOffset, // distância total do scroll vertical
window.pageXOffset, // distância total do scroll horizontal
)

const small = window.matchMedia('(max-width: 600px)'); // MatchMedia verificando se a largura está entre 600

if(small.matches) { // a propriedade matches retorna um valoor booleano
  console.log('Tela menor que 600px') //podendo executar algo caso seja verdadeiro ou falso
} else {
  console.log('Tela maior que 600px')
}

console.log('Exercicios')



// Verifique a distância da primeira imagem
// em relação ao topo da página
const PrimeiraImg = document.querySelector('img')
console.log(PrimeiraImg)
const PrimeiraImgTop = PrimeiraImg.offsetTop;
console.log(PrimeiraImgTop)

// Retorne a soma da largura de todas as imagens
console.log('Exercicios')
let soma = 0 // variavel de contagem
function somaImagens() { // função que sera executada depois do load
const Imagens = document.querySelectorAll('img') // selecionando todas img
Imagens.forEach(function(item){ // para cada imagem
  soma += item.offsetWidth // irá somar as larguras
  return soma // retornando o valor da soma
})
console.log(soma)// retornando o valor da soma
}

window.onload = function() { // quando carregar todas as imagens
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let links = document.querySelectorAll('a') // seleciona todos os links
console.log(links)
links.forEach(function(itens) { // para cada item do link 
if (itens.offsetWidth >= 48 && itens.offsetHeight >= 48 ) { // ira verificar os parametros
 console.log('é tamanho ocerto') // se true
} else {
  console.log('não é tamanho certo') //se false
}
})
// console
/*
NodeList(4) [a, a, a, a] // são 4 links
script.js:76 é tamanho ocerto // retorna certo
script.js:78 não é tamanho certo // retorna o segundo, que esta errado
2 script.js:76 é tamanho ocerto // retorna o restante certo

console.log(links[1]) // puzando o segundo, que deu erro
script.js:81 <a href=​"#faq">​Faq​</a>​ // o item errado
*/
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu1 = document.querySelector('.menu')
const navegador = window.outerWidth
const small1 = window.matchMedia('(max-width:720px)');
if (small.matches) {
  menu1.classList.add('menu-mobile')
}


