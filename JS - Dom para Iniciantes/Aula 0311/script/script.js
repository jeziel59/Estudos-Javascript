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
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = 'ativo'
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  }
}
initAccordion();


//vamos iniciar tudo dentro de uma function,
function initScrollSuave() {
//scroll suave
// para iniciar, damos uma classe js para o menu, selecionando apenas os itens que são links internos, 
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
//criamos um foreach para cada um passar pela function ao clique
linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
// aqui cada um vai ter o padrão prevenido 
function scrollToSection(event) {
  event.preventDefault();
  // então vamos ccolocar em href o exato atributo que foi clicado
  const href = event.currentTarget.getAttribute('href');
  console.log(href)
  // para linkar o id do link com a sessão, vamos utilizar o query selector com a var href 
  const section = document.querySelector(href);
  console.log(section);
  // agora já temos o link que foi clicado, e a sessão pertencente
  // vamos utilizar o window.scrollTo para ir até onde está a section,
  // Podemos utilizar o scroll into view, um metodo como objeto
  section.scrollIntoView({
    behavior: 'smooth', // suave
    block: 'start', // inicio da section
  })
// utilizando o intoview com o block start, não precisamos pegar o offset top
  /* MODO ALTERNATIVO
  //mas primeiro vamos pegar o topo de cada sessão com o offset
  const topo = section.offsetTop;
  //Para utilizarmos o scroll to, criamos um objeto com o top com a var da sessão, e o comportamento como smooth
  window.scrollTo({
    top: topo,
    behavior:"smooth"
  })  */
}
}
initScrollSuave() // chamando a function
