/*
// Dataset

//ao adicionar um elemento no dom com a tag data- , o JS recebe esse elemento como objeto, 
//com as informações como propriedades;
//<div data-cor="azul" data-width="500">Uma Div</div>

// Sempre que for interagir com um elemento por JS, utilizar o data-

const div = document.querySelector('div')
console.log(div.dataset) // DOMStringMap {cor: 'azul', width: '500'}

const div2 = document.querySelector('[data-cor]')
console.log(div2) // selecionando pelo nome da tag ou pelo data- seleciona o mesmo elemento

// podemos adicionar dataset por js
div.dataset.height = 1000;

//ou deletar 
delete div.dataset.width

//Transformação CamelCase

// Ao adicionar palavras contendo - após o data- o Js ao processar retira o traço e deica CamelCase;
//data-anima-scroll="left" = animaScroll: 'left'
//O mesmo acontece caso adicionar pelo Js com CamelCase, no HTML estará com -


// Exemplo real

//Podemos adicionar data- a diferentes seções para animações diferentes
<section data-anime="show-right">
<section data-anime="show-down">

// antes de adicionar a classe ativo, 
//dicionamos a uma const a tab com o index e o data- que adicionamos as sessões 
// e ao adicionar a classe ativo, adicionamos a const com o data- daquela sessão
const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);

//  dai criamos o css da classe ativa;

  .js-tabcontent section.ativo.show-right {
    display: block !important;
    animation: show-right .5s forwards;
  }
  .js-tabcontent section.ativo.show-down {
    display: block !important;
    animation: show-down .5s forwards;
  }

// e as animações para ocorrer diferentes
  @keyframes show-right {
    from {
      opacity: 0;
      transform: translate3d(-30px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes show-down {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }









//-----------------------------------------------------------------------------------------------------
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.



// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
*/