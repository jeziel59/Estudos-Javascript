export default function initTabNav() {
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