const links = document.querySelectorAll('a') //1- seleciona todos os links da pagina atual
links.forEach((link) => {
  link.addEventListener('click', handleclick) //2 para cada link, temos uma function handleclick
})
function handleclick(event) { //3 função que irá receber o html
  event.preventDefault() //4 previnindo o padrão do link
  fetchPage(event.target.href) //5 aciona a função de troca enviando o link da pag selecionada
  window.history.pushState(null,null, event.target.href) //6 trocalos o link da pag atual pelo da pagina clicada
}
async function fetchPage(url) { //7 function que recebe o html, async pois tem await para receber o html
  document.querySelector('.content').innerHTML ='Carregando'//8 Enquanto a pagina não carrega, pode ser incluso algum aviso de carregando
  const pageResponse = await fetch(url) //9 recebendo com fetch todo o html, a function não seguira enquanto não receber, por conta do await
  const pageText = await pageResponse.text()   //10 recebido, transforma em text
  replaceContent(pageText) //11 aciona a função de substituição de conteudo, enviando em formato de texto
}
function replaceContent(newText) {//12 funcão de substituição, recebenndo o html da pag selecionada
  const newHtml = document.createElement('div') //13 cria uma div no document
  newHtml.innerHTML = newText //14 a div recebe todo o html

  const oldContent = document.querySelector('.content') //15 seleciona o content da pag atual
  const newContent = newHtml.querySelector('.content') //16 seleciona o content da pag clicada
  oldContent.innerHTML = newContent.innerHTML //17 substitui o conteudo 'content' da pag atual pelo da clicada

  document.title = newHtml.querySelector('title').innerText //18 o titulo atual recebe o innerText da tag title da pag clicada
  //obs: pode realizar quantas trocas necessario
}

window.addEventListener('popstate', () => {//19 adionando eventlistener na window, para quando clicar em avancar ou voltar
  fetchPage(window.location.href) //20 quando o usuario clicar em voltar, executamos a função fetch enviando o link atual como parametro
} )










