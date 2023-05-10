/*
const doc = fetch("./doc.txt"); // realizando requisição com o metodo fetch

doc.then((resolucao) => {// utilizando then para interagir ccom o retorno de fetch, que é uma promise
    return resolucao.text(); // adicionando 
  })
  .then((body) => {// repetindo o then com o metodo text() para interagir com a propriedade body
    console.log(body);
    const conteudo = document.querySelector('.conteudo') // selecionando uma div do html
    conteudo.innerText = body // adicionando o texto do bloco de notas a div
  });

//jSON
// Selecionando um arquivo Json e transformando em um objeto
const cep = fetch('https://viacep.com.br/ws/87114655/json/')

cep.then((resolucao) => {
  return resolucao.json(); 
})
.then((cep) => {
  console.log(cep);
  const logadouro = document.querySelector('.logadouro')
  logadouro.innerText = cep.logradouro  
});

// Podemos também pegar todo um arquivo html e adicionar a uma div, ou partes dele

const site = fetch('./site.html') // puxando o arquivo html
const div = document.querySelector('.html') // selecionando a div que sera incluido

site.then(r => r.text()) 
  .then(body => {
    console.log(body)
    div.innerHTML = body // innerhtml da div recebe todo o body do arquivo html
    console.log(div)
    console.log(div.querySelector('h1'))
  })

*/
//Blob
// Inserção via fetch de imagem


//clone
// Para transformar tem a necessidade de clonar antes
  const cep = fetch('https://viacep.com.br/ws/87114655/json/'); //

  cep.then((res) => {
    const res2 = res.clone() // utilizando clone para colocar em uma const
    res.text().then((text) => {  // transformando em text
      console.log(text) // retorna texto
    })
    res2.json().then((json) => { // transformando em json
      console.log(json) // retorna objeto
    })
  })


 
 // basic = proprio servidor // cors = requisição de outro servidor, mas permitida 
 // caso de erro, é porque o site não permite, pois não é uma api