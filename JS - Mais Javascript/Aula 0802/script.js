// função será utilizada para ter diversos metodos, para o elemento passado como parametro

function $$(selectedElements) {  // $$ nada mais é que um nome de função
  const elements = document.querySelectorAll(selectedElements); // seleciona o elemento conforme parametro passado
  function hide() {
    elements.forEach((element) => { 
      element.style.display = "none";
    });
    return this; // após cada metodo, devemos retornar o this, para que possa ser utilizado o proximo metodo
  }
  function show() {
    elements.forEach((element) => {
      element.style.display = "initial"; // retorna ao display inicial, antes do none
    });
    return this;
  }
  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback); // podemos passar como parametro o tipo de evento, e o metodo/função que realizara no callback
    });
    return this;
  }
  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }
  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }
  return { // todos metodos listados no return
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

// é possivel chamar diversos parametros
buttons.hide().show().addClass('ativo').removeClass('ativo');

const btns = $$("button"); // chamando função com parametro tag button

function handleClick(event) {
  console.log(event.target);
}
btns.on("click", handleClick);
btns.addClass("ativo");
btns.removeClass("ativo");
