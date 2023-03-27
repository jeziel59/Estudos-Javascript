/*const h1 = document.querySelector('.animais-descricao')

console.log(h1.innerHTML)  // todo o html do elemento
console.log(h1.outerHTML) // todo o html do elemento
console.log(h1.innerText) // entrega o HTML apenas com o texto

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com todos os filhos do elemento em questão, 
lista.children[0]; // HTMLCollection que pode ser selecionado itens especificos como array[]
lista.children[--lista.children.length]; //  ou -1 pegamos o ultimo elemento da lista

lista.querySelectorAll('li'); // todas as LI's com queryselectorall
lista.querySelector('li:last-child'); // selecionando o ultimo com seletor CSS

const lista = document.querySelector('.animais-lista');
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima, pode ser um comentario ou até um espaço

lista.firstChild; // primeiro node child pode ser um comentario ou até um espaço
lista.childNodes; // todos os node child pode ser um comentario ou até um espaço
*/

/*
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// move lista para o final da area contato
contato.appendChild(lista); 

// na area contato, adiciona a lista antes do titulo de contato, o elemento onde vai inserir o before tem que ser filho da area
contato.insertBefore(lista, titulo) 


// Remove um filho
contato.removeChild(titulo); // remove titulo de contato

// Substitui um elemento por um filho do pai
contato.replaceChild(lista, titulo); // substitui titulo por lista
*/
/*
const contato = document.querySelector('.contato');
const novoh1 = document.createElement('h1') // cria a variavel com a tag h1
novoh1.innerText = 'Novo titulo'; // adiciona texto ao h1
novoh1.classList.add('titulo') // da classe de titulo ao h1
console.log(novoh1) 
contato.appendChild(novoh1) // adiciona o novo titulo no fim da area contato
*/
/*
const titulo = document.querySelector('h1'); // seleciono o elemento a ser clonado

const cloneTitulo = titulo.cloneNode(true); // metodo de clone com true, assegurando que todas as propriedades sejasm clonadas
const contato = document.querySelector('.contato');  //seleciono a area onde vai ser inserido
contato.appendChild(cloneTitulo);// inserindo o clone em uma area
*/

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
console.log(menu)
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy')
copy.appendChild(cloneMenu)
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq-lista')
console.log(faq)
console.log(faq.children)
const primeiro = faq.children[0]
console.log(primeiro)
// Selecione o DD referente ao primeiro DT
console.log(primeiro.nextElementSibling)
// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML