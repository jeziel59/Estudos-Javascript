// utilizando fetch para importar numeros de uma api que poderia ser de algum servidor,
//vamos criar o HTML e inserir os dados da API

import initAnimaNumeros from "./initAnimaNumeros.js"; //puxando a animação dos numeros para ser iniciada após o fetch
export default function initAnimaisFetch() {

async function fetchAnimais(url) { //2 function que irá fazer o fetch, ativar a função de troca, e inserir no html
  const animaisResponse = await fetch(url) //3 realiza o fetch da api passada na chamada a function
  const animaisJson = await animaisResponse.json() //4 transforma em json
  const numerosGrid = document.querySelector('.numeros-grid') //5 seleciona a div que irá receber os dados
  animaisJson.forEach(animal => { //6 para cada objeto dentro do json 
    const divAnimal = createAnimal(animal) //7 ativamos a função que irá criar o html
      numerosGrid.appendChild(divAnimal) //13 adiciona o html criado dentro da div selecionada
  });
  initAnimaNumeros() //14 inicia a function importada de animação dos numeros
}
function createAnimal(animal) { //8 função que cria o html com as informações do json
const div = document.createElement('div'); //9 cria um elemento div
div.classList.add('numero-animal'); //10 adiciona a classe 
div.innerHTML = `<h3>${animal.especie}</h3><span data-numero="">${animal.total}</span>` //11 conteudo html da div, com um h3 e um span
 return div //12 retorna o conteudo html para ser inserido no html
}
fetchAnimais('./numeros.json') //1 chamando a função dom o link da "API"
}

