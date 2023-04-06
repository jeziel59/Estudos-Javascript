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

function initScrollSuave() {
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  console.log(href)
  const section = document.querySelector(href);
  console.log(section);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
}
initScrollSuave()
