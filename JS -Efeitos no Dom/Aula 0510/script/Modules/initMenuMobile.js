import outsideClick from "./outsideclick.js";

export default function initMenuMobile() { // puxando função criada anteriormente que verifica se o clique foi fora da janela
  const menuButton = document.querySelector('[data-menu="button"]'); // selecionamos o botão
  const menuList = document.querySelector('[data-menu="lista"]'); // selecionamos a lista (ul)
  const eventos = ["click", "touchstart"];

  if (menuButton) {
  eventos.forEach((evento) => {// para cada item da array de eventos
  menuButton.addEventListener(evento, openMenu); // vai adicionar o open menu
  });
  function openMenu(event) {// function para adicionar e remover a classe
    menuList.classList.add("active"); // adicionando as classes ativas
    menuButton.classList.add("active");
    outsideClick(menuList, eventos, () => {// chamamos a função criada outsideClick enviando os parametros de menuList(ul) os eventos de click e chamando a função de callback
      menuList.classList.remove("active"); // removendo as classes após a verificação de click fora em outsideclick
      menuButton.classList.remove("active");
    });
  }
}
}
