function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
  }
}
initTabNav(); //inicia função tabnav
/* */

// Accordionlist - Utilizado para ocultar, como por ex a descrição de uma FAQ
//desclarando todo o conteudo em uma função, e chamando ela no final
function initAccordion() {
  //selecione toda a sessão onde está a pergunta + a pergunta, nesse caso o dt
  const accordionList = document.querySelectorAll(".js-accordion dt");
  // declaração de variavel com o nome da classe a ser empregada
  const activeClass = 'ativo'
  // dando classe ao primeiro item para iniciar aberto
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  //acom o if, a função só ocorrerá se gouver lenght
  if (accordionList.length) {
    // aqui nos vamos passar um por um verificando o click, caso houver ativara a function
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
//caso ative, a pergunta e o seguinte recebera a classe ativo 
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  }
}
initAccordion(); //inicia a accordion
