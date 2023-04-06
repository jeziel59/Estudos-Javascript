function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='content'] li");
  const tabContent = document.querySelectorAll("[data-tab='menu'] section");
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
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll("[data-tab='accordion'] dt");
  const activeClass = "ativo";
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

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-tab="menu"] a[href^="#"]');
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    console.log(href);
    const section = document.querySelector(href);
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
initScrollSuave();
