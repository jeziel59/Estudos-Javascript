/*const img = document.querySelector('img')
console.log(img)
img.addEventListener('click', callclick) // IMPORTANTE, apenas chame a função sem os parenteses

function callclick(event){
  console.log('Clicou')
  console.log(event) 
}

const animaisLista = document.querySelector('.animais-lista');
animaisLista.addEventListener('click', executarCallback);

function executarCallback(event) {
  const currentTarget = event.currentTarget; // passa o valor da lista
  const target = event.target; // qual item o clique ocorreu
  const type = event.type; // tipo de evento // click
  const path = event.path;
  console.log(currentTarget, target, type, path);
  console.log(this)
}

const linkExterno = document.querySelector('a[href^="http"]');
console.log(linkExterno)
linkExterno.addEventListener('click', handleLinkExterno);

function handleLinkExterno(event) {
  event.preventDefault()
  console.log(event)
}


const pH2 = document.querySelector('h2')

pH2.addEventListener('mouseenter', passou)

function passou(event) {
console.log(event.type, event)
}

window.addEventListener('keydown', hancleKeyboard);// propriedade de aperto de tecla chamando a função
function hancleKeyboard(event) {
  if (event.key === 'f') { // função acionada pela tecla do parametro
    document.body.classList.toggle('fullscreen')// ação realizada 
  }
}
*/
const imagens = document.querySelectorAll('img') // coloca o elemento em uma var

imagens.forEach((img) => { // para cada 
  img.addEventListener('click', imgSRC)
})
function imgSRC(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src)
}

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]')

links.forEach((li) => {
  li.addEventListener('click', clicou)
  })
function clicou(event) {
    event.preventDefault()
    console.log(event)
    links.forEach((linksoff) => {
    linksoff.classList.remove('ativo')
    })
    this.classList.add('ativo')
}


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const tudo = document.querySelectorAll('body *')

tudo.forEach((e) =>{
  e.addEventListener('click', clickT)})
function clickT(ev) {
  ev.currentTarget.remove();
}
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
window.addEventListener('keydown', handleKey)

function handleKey(event) {
  if (event.key === 't') {
    console.log(event.key)
      document.documentElement.classList.toggle('txtmaior');
    }
  }


  const imgs = document.querySelectorAll('img');

  imgs.forEach((img) => {
    img.addEventListener('click', imgSrc);
  });
  function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
  }
  

  
  const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


