//const titulo = document.querySelector('h1'); // seleciona o h1 dentro do document
/*titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;*/

/*const tituloh1 = document.querySelector('#tit') //seleciona a id #tit
tituloh1.addEventListener('click', function(){
alert('clicou');
})*/

const tituloh1 = document.querySelector('#tit') //seleciona a id #tit
tituloh1.addEventListener('click', callback1)

function callback1(){
  alert('clicou');
  }

  // Retorne o url da página atual utilizando o objeto window
console.log(window.location.href)
// Seleciona o primeiro elemento da página que
// possua a classe ativo
console.log(tituloh1.classList)
// Retorne a linguagem do navegador
console.log(window.navigator.language)
// Retorne a largura da janela 
console.log(window.innerHeight)
console.log(window.innerWidth)